import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.textInactive};
    padding: 2rem ;

    @media only screen and (max-width: 1024px) {
        padding: 2rem ;
    }

    @media only screen and (max-width: 500px) {
        padding: .5rem ;
    }
`;

export const ContainerTodo = styled.div`
    width: 80%;
    height: 80%;
    /* max-width: 30rem; */
    min-height: 80vh;
    max-height: 95vh !important;
    border-radius: .5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr auto;
    border: .1rem solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden ;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .1rem solid ${props => props.theme.colors.border};
    h1{
        font-size: 1.25rem;
    }
`;

export const TaskContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    max-height: 25rem;
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

   
    & li {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 1rem;
        /* background-color: #f0f; */

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

export const ButtonNewTask = styled.button`
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textInactive};
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: .5rem .5rem 0 0 ;
    font-size: 1.2rem;
    font-weight: 600;

    svg{
        font-size: 1.5rem;
        margin-right: .5rem;
    }

    &:hover{
        background-color: ${props => props.theme.colors.secondary};
    }
`;


const animateModalContainer = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;


export const ModalContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${props => props.theme.colors.background};
    border-radius: .5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    animation: ${animateModalContainer} .24s ease-in-out;
    padding: 2rem;

    & h2{
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.text};
        margin: 0 0 1rem 0;
    }

    & input{
        width: 90%;
        height: 3rem;
        border-radius: .5rem;
        border: .1rem solid ${props => props.theme.colors.border};
        padding: .5rem 1rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        outline: none;
        transition: all .2s ease-in-out;
        margin: 0 0 1rem 0;
    }
`;

export const ButtonClose = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textInactive};
    cursor: pointer;
    outline: none;
    transition: all .2s ease-in-out;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1  ;

    :hover{
        background-color: ${props => props.theme.colors.secondary};
    }
`;

export const Button = styled.button`
    width: fit-content;
    padding: .5rem 2rem;
    height: 3rem;
    border-radius: .5rem;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
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
    height: fit-content;
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