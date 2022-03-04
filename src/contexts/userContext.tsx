import { createContext, useContext, useState } from 'react'

interface IUserData {
    id: string;
    name: string;
    email: string;
}

interface IUserProps extends IUserData {
    setAuth: (dataUser: IUserData) => void;
}

const userContext = createContext<IUserProps>({
    id: '',
    name: '',
    email: '',
    setAuth: () => {},
})

const UserProvider = (props: any) => {
    const { children } = props;
    const [dataUser, setDataUser] = useState<IUserData>({
        id: '',
        name: '',
        email: '',
    })

    const setAuth = (data: IUserData) => {
        setDataUser(data)
    }
    
    return (
        <userContext.Provider value={{...dataUser, setAuth: (value)=> {
            setAuth(value) 
            return 
        } }}>
            {children}
        </userContext.Provider>
    )
   
}

const useUser = () => {
    const user = useContext(userContext);
    return user;
}

export { UserProvider, useUser };