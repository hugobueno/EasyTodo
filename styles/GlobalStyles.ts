import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background: #f0f0f5;
        color: #000;
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        width: 100vw;
    }

    .faid-out{
        transform: translateX(100%);
    }
`;

export default GlobalStyles;