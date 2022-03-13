import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.textInactive};
    height: 100% ;
    max-height: 86vh;
    border-radius: 2rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05);

    @media only screen and (max-width: 530px){
        border-radius: 0;
    }

`;

export const ContainerTodo = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    position: relative;
    overflow: hidden ;
    padding: 2rem;

    @media only screen and (max-width: 425px){
        padding: 1rem;
    }

    @media only screen and (max-width: 375px){
        padding: .5rem;
    }
`;

export const TaskContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    max-height: 20rem;

    
`;

export const TaskTitle = styled.h2`
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
`;

export const TaskList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    margin: 1rem 0;
    padding: 0 .5rem;
    overflow-y: scroll;
    max-height: 20rem;

    ::-webkit-scrollbar {
        width: .5rem;

    }

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.background};

    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.text};
        border-radius: .5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.textInactive};

    }

    ::-webkit-scrollbar-thumb:active {
        background: ${props => props.theme.colors.textInactive};    

    }

   
    & li {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 1rem;

        input[type="checkbox"] {
            margin-right: .5rem;
            width: 1.4rem;
            height: 1.4rem;
            border: 10px;
            filter: hue-rotate(50deg);
        }

        label{
            font-size: 1rem;
            font-weight: 600;
            color: ${props => props.theme.colors.text};
        }

        button{
            padding: 0;
            margin: 0;
            cursor: pointer;
            border: none;
            display: none;

             svg{
                font-size: 1.2rem;
            }
           
        }

        :hover{
            button{
                display: block;
            }
        }

        div{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            svg{
                margin-right: .5rem;
            }
        }

       
    }

    .completed{
        text-decoration: line-through;
    }
    .no_completed{
        text-decoration: none;
    }
`;

export const Button = styled.button`
    width: fit-content;
    padding: .5rem 1rem;
    height: 3.2rem;
    border-radius: .5rem;
    border: none;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textInactive};
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;

    hover{
        background-color: ${props => props.theme.colors.secondary};
    }   
`;

export const TasksCompleted = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    border-top: .1rem solid ${props => props.theme.colors.border};
    max-height: 20rem;

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

`;


export const ButtonRemove = styled.button`
    border: none;
    background-color:transparent;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 1.5rem;
    }
`;

export const HeaderTodo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    /* border-bottom: .1rem solid ${props => props.theme.colors.border}; */
    padding: 1rem;

    h1{
        color: ${props => props.theme.colors.text};
    }
`;

export const NewTask = styled.form`  
    display: flex;
    width: 100%;
    margin-top: 1rem;


    input{
        width: 90%;
        height: 3.2rem;
        border-radius: .5rem;
        border: .15rem solid ${props => props.theme.colors.border};
        padding: .5rem 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        outline: none;
        transition: all .2s ease-in-out;
        margin: 0 .5rem 1rem 0;
    }
`;