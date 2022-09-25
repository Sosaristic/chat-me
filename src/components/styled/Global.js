import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behaviour: smooth;
}
a{
    text-decoration: none;
}
body{
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
input{
    outline: none;
}

`
export default GlobalStyles;