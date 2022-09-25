import styled from "styled-components";

export const BottomStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  background-color: ${({background})=>background};
  
  width: 100%;
  color: gray;
  padding: 6px;
  z-index: 1000;
  @media(min-width: 992px){
    width: 80%;
  }
`;
