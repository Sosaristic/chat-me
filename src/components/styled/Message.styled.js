import styled, { css } from "styled-components";

export const MessageStyled = styled.div`
display: flex;
flex-direction: column;
margin-top:1rem;
padding: 4px 6px;

.date{
  font-size: xx-small;
  margin-bottom: 3px;
}
.name{
  font-size: smaller;
  color: gold;
}
.time{
    font-size: 2.5vw;
    margin-top: 3px;
    align-self: flex-end;
    padding-right: 4px;
    @media(min-width: 992px){
      font-size: .5rem;
    }
}
.message{
    font-size: 4vw;
    @media(min-width: 992px){
      font-size: 1rem;
    }
}
  ${(props) => {
    switch (props.$type) {
      case "others":
        return css`
        .date{
          margin-left: 2rem;
        }
          .message-container{
          color: white;
          background-color: dimgray;
          border-radius: 0 20px 20px 20px;
          margin-left: .5rem;
          width: fit-content;
          padding: 6px 10px;
          max-width: 80%;
          word-break: break-word;
          }
        `;
        case "personal":
            return css`
            .date{
              align-self: flex-end;
              margin-right: 2rem;
            
            }
              .message-container{
                display: flex;
                flex-direction: column;
              color: white;
              background-color: #f57f17;
              border-radius: 20px 0 20px 20px;
              width: fit-content;
              margin-right: .5rem;

              padding: 6px 10px;
              max-width: 80%;
              align-self: flex-end;
              word-break: break-word;
              .name{
                display: none;
              }
              .time{

              }
            }
            `;

      default:
        return css`
          position: relative;
          background-color: blue;
          color: red;
        `;
    }
  }}
`;
