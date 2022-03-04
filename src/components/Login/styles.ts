import styled, {keyframes} from 'styled-components';

interface ILoginContainer{
    auth: boolean;
}

export const LoginContainer = styled.div`
    display: ${(props: ILoginContainer) => props.auth === true ? 'none' : 'grid'};
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 1rem 3rem;
    margin: 1rem;
    border: 1px solid #e5e5e5;
    position: absolute;
    top: 2rem;
    right: 2rem;
    min-width: 30rem;
    z-index: 20;
    button{
        background-color: #4285f4;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        min-width: auto;
        top: 0;
        left: 0;
        padding: .5rem;
    }

   
`;

export const IconUser = styled.div`
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
    overflow: hidden !important;
    border-radius: 50%;
    margin-right: 1rem;
`;

export const DataUser = styled.div`
    display: flex;
    flex-direction: row;

    .data_user{
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        
        span{
            font-size: 1rem;
            font-weight: 600;
            text-transform: capitalize;
        }

        p{
            font-size: 0.8rem;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    svg{
        font-size: 1.6rem;
        margin-right: .5rem;
    }
`;