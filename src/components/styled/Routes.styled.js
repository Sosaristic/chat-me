import styled from "styled-components";


export const RoutesStyled = styled.div`
position: relative;
width: 100%;
min-height: 100vh;
background-color: ${({backgroundColor})=>backgroundColor};
color: ${({color})=>color};
overflow: auto;
@media(min-width: 992px){
    width: 80%;
}
`