import React, { useEffect } from 'react';
import { DataUser, Header, IconUser, LoginContainer } from './styles';
import { useSession, signIn, } from "next-auth/react"
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios';
import { useUser } from '../../contexts/userContext';

const Login: React.FC = () => {
    const { data: session, } = useSession()
    const [auth, setAuth] = React.useState(false)
    const { setAuth: SetDataAuth, } = useUser()

    const handleSignInEasyTodo = async () => {
        const { data: { user } } = await axios.get('/api/mongo/user', {
            params: {
                email: session?.user?.email
            }
        })
        if (user) {
            SetDataAuth({
                id: user._id,
                name: user.name,
                email: user.email
            })
            setAuth(true)
            window.location.reload()

        }
        return
    }

    useEffect(() => {
        if (session) {
            handleSignInEasyTodo()
        }
    }, [session])

    return (
        <LoginContainer auth={auth} >
            {session && session?.user?.image ? (
                <>
                    <Header>
                        <FcGoogle />  Voce esta logado como
                    </Header>
                    <DataUser>
                        <IconUser >
                            <Image width={'50px'} height={'50px'} src={session.user?.image} />
                        </IconUser>
                        <div className='data_user'>
                            <span>{session?.user?.name}</span>
                            <p>{session?.user?.email}</p>
                        </div>
                    </DataUser>
                </>
            ) : (
                <>
                    <Header>
                        <FcGoogle /> Faça login com google para salvar suas tarefas.
                    </Header>
                    <div>
                        <button onClick={() => signIn('google')}>Login</button>
                    </div>
                </>
            )}
        </LoginContainer>
    )
}
export default Login;