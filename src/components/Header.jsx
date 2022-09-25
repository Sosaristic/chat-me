import React, {useEffect, useState} from "react";
import { Container } from "./styled/Container";

import { MdGroupAdd } from "react-icons/md";
import ImageCard from "./ImageCard";
import boy from "./images/boy.png";

const getWindowSize = ()=>{
  const {innerWidth} = window
  return innerWidth
}
export default function Header(props) {

  const {innerWidth}= window;
  const[windowSize, setWindowSize] = useState(getWindowSize())
useEffect(()=>{
  const handleWindowSize = ()=>{
    setWindowSize(getWindowSize())
  }
  window.addEventListener('resize', handleWindowSize)
  return ()=>{
    window.removeEventListener('resize', handleWindowSize)
  }
}, [])

  return (
    <Container
      position={props.position}
      top="0"
      display="flex"
      alignItems="center"
      height="3.5rem"
      width="100%"
      padding="2rem .5rem"
    >
     {windowSize < 992 && <Container onClick={props.handleSideNav}>
        {" "}
        <ImageCard
          src={props.image ? props.image : boy}
          height="3rem"
          width="3rem"
          imgHeight={props.imgHeight}
          imgWidth={props.imgWidth}
        />
      </Container>} 

      <Container fontSize={props.fontSize} margin="0 0 0 2rem">
        {props.title}
      </Container>
      {props.groupIcon && (
        <Container
          margin="0 1rem 0 auto"
          fontSize="xx-large"
          color="darkslategray"
        >
          <MdGroupAdd />
        </Container>
      )}
    </Container>
  );
}
