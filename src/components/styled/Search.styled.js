import styled from "styled-components";

export const SearchStyled = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({background})=>background};
  color: ${({ color }) => color};

  z-index: 2000;

  input{
    width: 100%;
    height: 2rem;
    border: none;
    outline: none;
    padding: 0 4px 0 6px;
    font-size: medium;
    background-color: ${({background})=>background};
    color: ${({ color }) => color};
  }
  hr{
    margin-top: 3rem;
    
  }
`;
