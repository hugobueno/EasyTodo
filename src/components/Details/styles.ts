import styled from 'styled-components';

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 2rem ;
    text-align: center;

    h1{
        color: ${({ theme }) => theme.colors.textInactive};
        font-size: 1.8rem;
        font-weight: 400;
    }


    @media only screen and (max-width: 1220px) {
        padding: 2rem ;
        text-align: left;

        h1{
            font-size: 1.5rem;
            width: 90%;
        }
    }

    @media only screen and (max-width: 1024px) {
        padding: 2rem ;
        text-align: left;

        h1{
            font-size: 1.25rem;
            width: 80%;
        }
    }

    @media only screen and (max-width: 500px) {
        h1{
            width: 100%;
        }
    }
   
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.textInactive};
    padding: 2rem ;
    text-align: center;
    margin-top: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};

    @media only screen and (max-width: 1024px) {
        display: none;
    }
    
`;