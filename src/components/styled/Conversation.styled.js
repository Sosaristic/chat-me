import styled from "styled-components";


export const ConversationStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 4rem 0;
  display: flex;
  background-image: url(${({ background }) => background});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  
  color: ${({ color }) => color};
  flex-direction: column;
  overflow: auto;

  .arrow-down {
    position: fixed;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    right: 2rem;
    bottom: 6rem;
    font-size: larger;
    border-radius: 50%;
    background-color: gray;
    @media (min-width: 992px) {
      right: 4rem;
    }
  }
`;

export const MessageInputStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #393b37;
  @media (min-width: 992px) {
    width: 80%;
  }
  form {
    width: 100%;
    display: flex;
  }
  textarea {
    resize: none;
    background-color: #393b37;
    width: 80%;
    margin-left: 0.5rem;
    font-size: large;
    padding: 0.3rem 1rem;
    border: none;
    outline: none;
    min-height: 2rem;
    color: white;
  }
  
`;
