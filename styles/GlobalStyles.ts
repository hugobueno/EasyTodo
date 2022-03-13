import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #f2f2f2;
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
    }

    .faid-out{
        transform: translateX(100%);
    }
`;

export default GlobalStyles;