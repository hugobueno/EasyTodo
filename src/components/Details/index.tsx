import React from 'react';
import { CardInfo, DetailsContainer } from './styles';
import Image from 'next/image'
import ImageTodo from '/public/images/todo.svg'

const Details: React.FC = () => {

  return (
    <DetailsContainer>
      <Image src={ImageTodo} alt="Todo" width={300} height={300} />
      <h1>O <strong>EasyTodo</strong> é uma simples lista de tarefas, que armazena os dados
        temporariamente.
      </h1>
      <CardInfo>
        Combine Ctrl + Alt + Enter para criar uma nova tarefa.
      </CardInfo>
    </DetailsContainer>
  )
}

export default Details;