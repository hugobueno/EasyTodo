import styled from 'styled-components';

export const NavContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 'nav';
    grid-column: 1 /span 2;
    border-bottom: .15rem solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background};

`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 80%;
    max-width: 1260px;
    padding: 0 2rem;

    
    @media only screen and (max-width: 530px) {
        .user_data span{
            font-size: .65rem;
        }

        padding: 0 0rem;

    }

    @media only screen and (max-width: 375px) {
        .user_data span{
            font-size: .5rem;
        }
    }

   
`;

export const PhotoContainer = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 20%;
    background-color: ${props => props.theme.colors.background};
    overflow: hidden;
    border: .2rem solid ${props => props.theme.colors.background };
    color: ${props => props.theme.colors.primary};
    margin: 1rem;


    img{
        object-fit: cover;
    }

    @media only screen and (max-width: 425px){
        width: 3rem;
        height: 3rem;
    }

`;

export const ButtonLogout = styled.button`
    background-color: ${props => props.theme.colors.quaternary};
    border: none;
    border-radius: .5rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    font-weight: bold;
    padding: .5rem 1rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1rem;

    @media only screen and (max-width: 425px){
        width: 2.5rem;
        height: 2.5rem;
        padding: .8rem;
    }

    @media only screen and (max-width: 375px){
        width: 2rem;
        height: 2rem;
        padding: .5rem;
        margin: .5rem 1rem 0 0;
    }

`;

export const UserData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;

        p{
            font-weight: 700;
            text-transform: capitalize;
        }

        p, span{
            color: ${props => props.theme.colors.text};
        }

        span{
            font-size: .85rem;
        }
`;