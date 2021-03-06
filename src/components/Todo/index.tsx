import React, { FormEvent, useEffect, useState, useRef } from 'react';

import {
  Button, ButtonRemove, Container, ContainerTodo,
  TaskContainer, TaskList, TasksCompleted, TaskTitle, HeaderTodo, NewTask
} from './styles';
import { FiArrowRight, FiCheckSquare, FiCircle, FiRotateCcw, FiTrash2, FiX } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useUser } from '../../contexts/userContext';
import { useSession } from 'next-auth/react';
import { Title } from '../../../styles/GlobalComponents';
import Skeletron from '../Skeletron';

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
  const [isFetch, setIsFetch] = useState(false);

  const { id } = useUser()
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
    if (id) {
      handleGetTasks()
    }
  }, [id])

  const handleGetTasks = async () => {
    try {
      setIsFetch(true);
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
        setIsFetch(false);
      }
    } catch (error) {
      console.log(error);
      alert('Erro ao buscar tarefas')
    }
  }

  return (
    <Container>
      <ContainerTodo>
          <HeaderTodo>
            <Title>Todo List</Title>
            <NewTask onSubmit={(event) => {
              event.preventDefault()
              handleAddTask(taskData)
            }}>
              <input value={taskData?.title || ''} onChange={event => setTaskData({ ...taskData, title: event.target.value || '', id: uuidv4(), done: false })} type="text" placeholder="Nova tarefa" />
              <Button type='submit'><FiArrowRight /></Button>
            </NewTask>
          </HeaderTodo>
          <TaskContainer>
            <TaskTitle>{taskList.length <= 1 ? 'Tarefa' : 'Tarefas'} {taskList.length}</TaskTitle>
            <TaskList>
              {isFetch ? (
                <>
                  <Skeletron width='100%' height='2rem' />
                  <Skeletron width='100%' height='2rem' />
                  <Skeletron width='100%' height='2rem' />
                  <Skeletron width='100%' height='2rem' />
                </>
              ) : (
                taskList?.map(task => {
                  return (
                    <li key={task.id.toString()}>
                      <div className='text_data'>
                        <input ref={inputRef} hidden onClick={(event) => {
                          event.currentTarget.checked ? handleCheckTask(task) : handleReturnTask(task)
                        }} name='check' id={task.id.toString()} type="checkbox" />
                        <label className={task.done ? 'completed' : 'no_completed'} htmlFor={task.id.toString()}>
                          {task.title}
                        </label>
                      </div>
                      <ButtonRemove onClick={() => handleRemoveTask(task.id)}><FiTrash2 /></ButtonRemove>
                    </li>
                  )
                })
              )}

              {!isFetch && !taskList.length && <p>Não há tarefas cadastradas</p>}
            </TaskList>
          </TaskContainer>
        <TasksCompleted>
          {completedTaskList.length >= 1 && (
            <>
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
            </>
          )}
        </TasksCompleted>
      </ContainerTodo>
    </Container>
  )
}

export default Todo;