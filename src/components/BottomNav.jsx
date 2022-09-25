import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useSelector} from "react-redux"
import ChatIcons from "./ChatIcons";
import { BottomStyled } from "./styled/BotomNav.styled";
import { MdChatBubble, MdGroups } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const theme = useSelector((state)=>state.theme.theme)

  const [color1, setColor1] = useState("gray");
  const [color2, setColor2] = useState("gray");
  const [color3, setColor3] = useState("gray");

 
  //using effect to set active color
  useEffect(() => {
    path === "/" ? setColor1("#f57f17") : setColor1("gray");
    path === "/people" ? setColor2("#f57f17") : setColor2("gray");
    path === "/groups" ? setColor3("#f57f17") : setColor3("gray");
  }, [path]);
 

  const handlePeople = (id) => {
    if (id === 1) {
      navigate("/");
    }
    if (id === 2) {
      navigate("/people");
    }
    if (id === 3) {
      navigate("/groups");
    }
  };

  return (
    <BottomStyled background={theme.background}>
      <ChatIcons title="Chats" color={color1}>
        <MdChatBubble onClick={() => handlePeople(1)} />
      </ChatIcons>
      <ChatIcons title="People" color={color2}>
        <BsPeopleFill onClick={() => handlePeople(2)} />
      </ChatIcons>
      <ChatIcons title="Groups" color={color3}>
        <MdGroups onClick={() => handlePeople(3)} />
      </ChatIcons>
    </BottomStyled>
  );
}
