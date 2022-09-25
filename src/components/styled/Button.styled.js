import styled from "styled-components";

export const ButtonStyled = styled.button`
  all: unset;
  outline: none;
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  display: ${({ display }) => display};
  flex-direction: ${({ direction }) => direction};
  text-align: center;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  height: ${({ height }) => height};
  width: ${({ width }) => width || "fit-content"};
  border-radius: ${({ radius }) => radius};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  box-shadow: ${({ shadow }) => shadow};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border || "0.1rem solid black"};
  z-index: ${({ zIndex }) => zIndex};
`;
