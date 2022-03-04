import type { NextPage } from 'next'
import Todo from '../src/components/Todo'
import { Container } from '../styles/GlobalComponents'
import Login from '../src/components/Login'
import Details from '../src/components/Details'

const Home: NextPage = () => {
  return (
    <Container>
      <Login />
      <Details />
      <Todo />
    </Container>
  )
}

export default Home
