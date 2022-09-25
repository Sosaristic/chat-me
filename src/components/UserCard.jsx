import React from "react";
import { Container } from "./styled/Container";
import {useNavigate} from "react-router-dom"
import ImageCard from "./ImageCard";
import Time from "./Time";

export default function UserCard({email, photoUrl, name, message, users, time}) {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
navigate(`/conversation/${email}`, {state: {email, name, users}})
    }
  return (
    <Container display="flex" position="relative" padding="4px 10px" margin=".5rem 0 0 0" onClick={handleNavigate}>
      <ImageCard width="3.5rem" height="3.5rem" src={photoUrl}/>

      <Container margin="0 0 0 1rem" position="relative" width="80%" padding=".5rem 0 0 0 ">
        <Container display="flex">
        <Container  >{name}</Container>
        <Container margin="0 0 0 auto" fontSize="x-small"><Time time={time}/></Container>
        </Container>
        <Container fontSize="small" margin="8px 0 0 0">{message}</Container>
      </Container>
    </Container>
  );
}
