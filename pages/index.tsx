import type { NextPage } from 'next'
import Todo from '../src/components/Todo'
import { Container, Wrapper } from '../styles/GlobalComponents'
import Login from '../src/components/Login'
import Pomodoro from '../src/components/Pomodoro'
import Navbar from '../src/components/Navbar'
import Skeletron from '../src/components/Skeletron'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Login />
          <Pomodoro />
          <Todo />
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
