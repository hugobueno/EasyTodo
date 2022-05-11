import styled from "styled-components";

interface ITitleProps {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
}

export const Title = styled.div`
    font-size: ${(props: ITitleProps) => props.fontSize || "1.5rem"};
    color: ${(props: ITitleProps) => props.color || "#2d2d2d"};
    font-weight: ${(props: ITitleProps) => props.fontWeight || "bold"};
`;

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto !important;
    width: 100%;
    min-height: 88vh;
    padding: .5rem;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1200px;
    max-width: 1200px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;