import styled from "styled-components";

export const ProfileStyled = styled.div`
  position: fixed;
  min-height: 100vh;
  background-color: ${({background})=>background};
  width: 100vw;
  z-index: 4000;
  transform: ${({ translateX }) => translateX};
  transition: all 0.3s ease-in-out;
  color: ${({color})=>color};
  padding: 0 1.5rem;
  text-align: center;
  @media(min-width: 992px){
    position: relative;
    width: 20%;
    transform: translateX(0);
    z-index: 0;
  }

  .back {
    width: fit-content;
    margin: 1rem 0 0 0.5rem;
    font-size: 8vw;
    @media(min-width: 992px){
      display: none;
    }
  }
  .name {
    width: fit-content;
    margin: 0 auto;
  }
.mode{
    margin-left: 1rem;
}
  .toogle-container {
    margin-left: auto;
    text-align: center;
    
  }

  .label {
    position: relative;
    display: inline-block;
    width: 50px;
    height: auto;
    background-color: white;
    border-radius: 18px;
  }
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .inner {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease-in 0.6s;
    border: .5px solid gray;
    border-radius: 16px;
  }
  .inner::before {
    content: "";
    position: absolute;
    height: 25px;
    width: 25px;
    top: -4px;
    left: 1px;
    background-color: grey;
    transition: 0.4s ease-in;
    border-radius: 50%;
  }
  .checkbox:checked + .inner {
    
  }
  .checkbox:checked + .inner::before {
    transform: translate(26px);
    background-color: green;

  }
`;
