import React from "react";
import {useNavigate} from "react-router-dom"

import { Container } from "./styled/Container";
import ImageCard from "./ImageCard";

export default function InfoCard({ photoUrl, name, email, users, imgHeight, imgWidth, grpName }) {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    if(grpName){
      navigate(`/groupConversation/${grpName}`, {state : {email, photoUrl}})
    }
    else{
navigate(`/conversation/${email}`, {state: {email, name, users, }})
    }
  }
  return (
    <Container
      display="flex"
      alignItems="center"
      padding="4px 10px"
      margin="0 0 8px 0"
      onClick={handleNavigate}
      cursor="default"
    >
      <Container>
        <ImageCard width="3.5rem" height="3.5rem" src={photoUrl} imgHeight={imgHeight} imgWidth={imgWidth}/>
      </Container>
      <Container margin="0 0 0 10px" textTransform="capitalize">
        {name}
      </Container>
    </Container>
  );
}
