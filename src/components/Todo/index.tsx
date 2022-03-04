import React, { FormEvent, useEffect, useState, useRef } from 'react';

import { Button, ButtonNewTask, ButtonClose, ButtonRemove, Container, ContainerTodo, Header, ModalContainer, TaskContainer, TaskList, TasksCompleted, TaskTitle } from './styles';
import { FiCheck, FiCheckSquare, FiCircle, FiPlus, FiRotateCcw, FiTrash2, FiX } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useUser } from '../../contexts/userContext';
import { useSession } from 'next-auth/react';

interface ITask {
  id: string;
  title: string;
  done: boolean;
}

const Todo: React.FC = () => {

  const [taskData, setTaskData] = useState<ITask>();
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<ITask[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { email, id, name } = useUser()
  const { data: session } = useSession()

  const inputRef = React.useRef<any>();

  const handleModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleAddTask = async (task?: ITask) => {
    if (!task) {
      return;
    }
    const validDuplicate = taskList.filter(item => item.title === task.title);
    if (validDuplicate.length > 0) {
      return alert('Tarefa já cadastrada');
    }
    setTaskList([...taskList, task]);
    setModalOpen(false);
    setTaskData(undefined);

    if (session) {
      const { data } = await axios.post('/api/mongo/createTask', {
        description: task.title,
        userId: id,
      })
      setTaskList(
        [...taskList, task].map(item => {
          if (item.id === task.id) {
            return { ...item, id: data.task._id }
          }
          return item;
        })
      )
      return
    }
    return

  }

  const handleUpdateTaskApi = async (id: string, completed: boolean) => {
    const { data } = await axios.put('/api/mongo/updateTask', {
      id: id,
      completed: completed,
    })
    return data
  }

  const handleCheckTask = async (task: ITask) => {
    const removeTask = taskList.filter(item => item.id !== task.id);
    setTaskList(removeTask);
    setCompletedTaskList([...completedTaskList, { ...task, done: true }]);

    try {
      if (session) handleUpdateTaskApi(task.id, true);
    } catch (error) {
      console.log(error);
      alert('Erro ao atualizar tarefa');
    }
  }

  const handleRemoveTask = async (id: string) => {
    const newTaskList = taskList.filter(item => item.id !== id);
    const taks = taskList.find(item => item.id === id)
    if (taks) {
      setCompletedTaskList([...completedTaskList, taks])
    }
    setTaskList(newTaskList);

    try {
      if (session) handleUpdateTaskApi(id, true);
    }
    catch (error) {
      //in future update add toast
      alert('Erro ao remover tarefa');
    }

    return
  }


  const handleRemoveAllTaksCompleted = async () => {
    setCompletedTaskList([]);
    if (session) {
      const { data } = await axios.put('/api/mongo/removeTask', {
        userId: id,
      })
    }
    return
  }

  const handleReturnTask = (taks: ITask) => {
    const removeTask = completedTaskList.filter(item => item.id !== taks.id);
    setCompletedTaskList(removeTask);
    setTaskList([...taskList, { ...taks, done: false }]);

    try {
      if (session) handleUpdateTaskApi(taks.id, false);
    } catch (error) {
      console.log(error);
      alert('Erro ao atualizar tarefa');
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.keyCode === 13) {
        handleModal();
      }
      return
    }
    window.addEventListener('keydown', handleKeyDown);

    if (modalOpen === true && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }

  }, [modalOpen])

  useEffect(() => {
    if (id) {
      handleGetTasks()
    }
  }, [id])

  const handleGetTasks = async () => {
    try {
      const { data } = await axios.get(`/api/mongo/getTasks`, {
        params: {
          userId: id
        }
      })
      if (data.tasks) {
        const transformData = data.tasks.map((item: any) => {
          return {
            id: item._id,
            title: item.description,
            done: item.completed
          }
        })
        const unCompletedTasks = transformData.filter((item: any) => item.done === false);
        const completedTasks = transformData.filter((item: any) => item.done === true);
        setCompletedTaskList(completedTasks);
        setTaskList([...taskList, ...unCompletedTasks])
      }
    } catch (error) {
      console.log(error);
      alert('Erro ao buscar tarefas')
    }
  }

  return (
    <Container>
      <ContainerTodo>
        <ButtonNewTask onClick={handleModal}><FiPlus /> Nova tarefa</ButtonNewTask>
        <TaskContainer>
          <TaskTitle>{taskList.length <= 1 ? 'Tarefa' : 'Tarefas'} {taskList.length}</TaskTitle>
          <TaskList>
            {taskList?.map(task => {
              return (
                <li key={task.id.toString()}>
                  <div>
                    <input ref={inputRef} hidden onClick={(event) => {
                      event.currentTarget.checked ? handleCheckTask(task) : handleReturnTask(task)
                    }} name='check' id={task.id.toString()} type="checkbox" />
                    <label className={task.done ? 'completed' : 'no_completed'} htmlFor={task.id.toString()}>
                      <FiCircle />
                      {task.title}
                    </label>
                  </div>
                  <ButtonRemove onClick={() => handleRemoveTask(task.id)}><FiTrash2 /></ButtonRemove>
                </li>
              )
            })}
            {!taskList.length && <p>Não há tarefas cadastradas</p>}
          </TaskList>
        </TaskContainer>
        {completedTaskList.length >= 1 && (
          <TasksCompleted>
            <div className='header'><TaskTitle>Completas & Excluidas</TaskTitle>
              <ButtonRemove onClick={() => {
                handleRemoveAllTaksCompleted()
              }} ><FiTrash2 /></ButtonRemove>
            </div>
            <TaskList>
              {completedTaskList.map(task => {
                return (
                  <li key={task.id.toString()}>
                    <div>
                      {task.done ? <FiCheckSquare /> : <FiX />}
                      <label className={task.done ? 'completed' : 'no_completed'} >
                        {task.title}
                      </label>
                    </div>
                    <ButtonRemove onClick={() => {
                      handleReturnTask(task)
                    }}><FiRotateCcw /></ButtonRemove>
                  </li>
                )
              }).reverse()}
            </TaskList>

          </TasksCompleted>
        )}
        {modalOpen == true ? (
          <ModalContainer onSubmit={(event?: FormEvent) => {
            event?.preventDefault()
            handleAddTask(taskData)
          }} >
            <ButtonClose type='button' onClick={() => setModalOpen(false)}><FiX /></ButtonClose>
            <h2>Adicionar tarefa</h2>
            <input value={taskData?.title || ''} onChange={event => setTaskData({ ...taskData, title: event.target.value || '', id: uuidv4(), done: false })} type="text" placeholder="Título" />
            <Button type='submit'>Adicionar</Button>
          </ModalContainer>
        ) : null}
      </ContainerTodo>
    </Container>
  )
}

export default Todo;