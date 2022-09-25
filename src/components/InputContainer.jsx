import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineArrowBack } from "react-icons/md";
import { Container } from "./styled/Container";
import { SearchStyled } from "./styled/Search.styled";



export default function InputContainer(props) {
  const theme = useSelector((state) => state.theme.theme);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const handleInput = ({ target }) => setInputValue(target.value);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <SearchStyled background={theme.background} color={theme.color}>
      <Container display="flex" padding="4px 8px" position="fixed" width="100%">
        <Container width="15%">
          <MdOutlineArrowBack
            size={30}
            onClick={() => props.handleDisplayInput()}
          />
        </Container>
        <Container width="80%" margin="0 0 0 1rem" position="relative">
          <form>
            <input
              type="search"
              name="search"
              value={inputValue}
              
              placeholder="Search"
              onInput={handleInput}
              ref={inputRef}
            />
          </form>
        </Container>
      </Container>
      <hr />
    </SearchStyled>
  );
}
