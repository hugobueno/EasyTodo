import styled, { keyframes } from 'styled-components';

const animateSkeletron = keyframes`
    0%{
        left: -20%;
    }
    50%{
        left: 100%;
    }
    100%{
        left: -20%;
    }
`;

export interface ISkeletronContainer{
    width: string;
    height: string;
}

export const SkeletronContainer = styled.div`
    width: ${(props: ISkeletronContainer) => props.width};    
    height: ${(props: ISkeletronContainer) => props.height};
    height: 3rem;
    background-color: #efefef;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    margin: .5rem 0;
    
    ::after{
        animation: ${animateSkeletron} 3s  ease-in-out infinite;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 30%;
        height: 100%;
        background-color: #fff;
        filter: blur(30px);
    }
`;