
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: #ffffff;
    color: #000000;
}

a{
    text-decoration: none;
    color: inherit;
}
`;