import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    grid-gap: 1rem;
    padding: 3rem;

    @media only screen and (max-width: 530px) {
        padding: 1rem;
    }
`;

export const Timer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 15rem;
    background-color: ${props => props.theme.colors.primary};
    /* background-image: linear-gradient(-20deg, #7BE0AD 0%, #5F00BA 100%); */
    border-radius: 50%;
    color: ${props => props.theme.colors.textInactive};
    position: relative;
    overflow: hidden;
    border: none;


    h1{
        font-size: 1.5rem;
        font-weight: 400;
        z-index: 2;
    }

    h2{
        font-size: 3rem;
        z-index: 2;

    }

    ::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.quaternary};
        z-index: 1;
    }

    @media only screen and (max-width: 530px) {
        width: 10rem;
        height: 10rem;

        h1{
            font-size: 1rem;
        }

        h2{
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 375px) {
        width: 8rem;
        height: 8rem;

        h1{
            font-size: .75rem;
        }

        h2{
            font-size: 1.5rem;
        }
    }

`;



interface IButtonProps {
    isActive?: boolean;
    theme:{
        colors:{
            primary: string;
        }
    }
}

export const Button = styled.button`
        background-color: ${(props: IButtonProps) => props.isActive ? props.theme.colors.primary : '#fff'};
        color: ${(props: IButtonProps) => props.isActive ? '#fff' : props.theme.colors.primary};
        border: .125rem solid ${props => props.theme.colors.primary};
        border-radius: .5rem;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s;
        height: 3rem;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            font-size: 1rem;
            margin-left: .5rem;
        }
    `;

export const ContainerControlers = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 100%;

    h1{
        font-size: 2rem;
        border-left: .25rem solid ${props => props.theme.colors.primary};
        padding: 0 0 0 1rem;
        margin: 1rem 0;
        color: ${props => props.theme.colors.text};
    }

    div{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

`;

export const DetailPomo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    gap: 1rem;
    
    h1{
        font-size: 1.5rem;
        font-weight: 400;
    }

    h2{
        font-size: 2.5rem;
    }

`;



interface IBadge{
    bgColor?: string;
}


export const Badge = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center;
    height: 3rem;
    width: 75%;
    background-color: ${(props: IBadge) => props.bgColor ? props.bgColor : '#3c40c6'};
    border-radius: .5rem;
    color:  ${props => props.theme.colors.text};
    font-size: .8rem;
    font-weight: 600;
`; 


export const PomoTimer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 2rem;
    @media only screen and (max-width: 530px) {
        grid-gap: 1rem;
    }

`;

export const PomoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    color: ${props => props.theme.colors.text};

`;

export const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 14rem;
    background-color: ${props => props.theme.colors.background};
    box-shadow: 0 0 .5rem rgba(0,0,0,.05);
    border-radius: 2rem;

    @media only screen and (max-width: 375px) {
        margin: 0 .5rem 1rem 0;
    }
`;