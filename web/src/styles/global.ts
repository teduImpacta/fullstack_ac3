import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
    }

    html, body, .root {
        width: 100%;
        height: 100%;
        background-color: #f1f1f1;
    }



   
`;
