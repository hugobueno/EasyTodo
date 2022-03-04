import styled from "styled-components";

export const Title = styled.div`
    font-size: 48px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 2fr;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;