import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./services/firebase";

import { verticalScroll, handleScrollDown } from "../utils/MyFunctions";

import Header from "../components/Header";
import { MdOutlineArrowBack } from "react-icons/md";

import MessageInput from "../components/MessageInput";
import MessageCard from "../components/MessageCard";
import Empty from "../components/Empty";
import { Container } from "../components/styled/Container";
import { ConversationStyled } from "../components/styled/Conversation.styled";
import { FiChevronsDown } from "react-icons/fi";
import groupImg from "../components/images/group.svg";
import boy from "../components/images/boy.png";

export default function GrpConversation() {
//scroll functions
const handleScroll = () => {
  let scrollPositionFromBottom = verticalScroll()

  scrollPositionFromBottom >= 100 ? setArrowDwn(true) : setArrowDwn(false);
};
const verticalScroll = ()=>{
  const scrollHeight = ref.current.scrollHeight;
  const scroll = ref.current.scrollTop;
  let result = scrollHeight - scroll;
  let client = ref.current.clientHeight
  const scrollPositionFromBottom = result - client
  return scrollPositionFromBottom

}
const handleScrollDown = () => {
  const height = ref.current.scrollHeight;
  ref.current?.scrollTo({ top: height, left: 0, behavior: "smooth" });
};



  const isUser = useSelector((state) => state.auth.authState);

  const [chats, setChats] = useState([]);
  const [arrowDwn, setArrowDwn] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { email, photoUrl } = location.state || {};
  
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    const ref = query(
      collection(db, "groups", email, "messages"),
      orderBy("time", "asc")
    );
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        let datas = doc.data();

        messages.push(datas);
      });
      setChats(messages);
    });
    return () => {
      unsubscribe();
    };
  }, [email]);

  useEffect(() => {
    let scrollPositionFromBottom = verticalScroll()
    const height = ref.current.scrollHeight;
   // if scroll is at the botom
   if(scrollPositionFromBottom === 0){
    ref.current?.scrollTo({ top: height, left: 0, behavior: "smooth" });
   } 
   else{
    ref.current?.scrollTo({ top: height, left: 0, behavior: "auto" });
   }
    
  }, [chats]);
  useEffect(()=>{
    handleScroll()
  }, [handleScroll])
  
  return (
    <ConversationStyled
      background={theme.backgroundImage}
      color={theme.color}
      ref={ref}
      onScroll={handleScroll}

    >
      <Container
        position="fixed"
        top="0"
        display="flex"
        width="100%"
        padding=".5rem 0 0 0"
        alignItems="center"
        color={theme.color}
        background={theme.background}
      >
        <Container>
          <MdOutlineArrowBack size={30} onClick={() => navigate(-1)} />
        </Container>
        <Container margin="0 0 0 1rem">
          <Header
            image={photoUrl}
            title={email}
            imgHeight="2.5rem"
            imgWidth="2.5rem"
          />
        </Container>
      </Container>

      {chats.length == 0 ? (
        <Empty />
      ) : (
        chats?.map((chat) => {
          return (
            <MessageCard
              message={chat.message}
              key={chat.time}
              type={chat.senderName === isUser.name ? "personal" : "others"}
              time={chat.time}
              senderName={chat.senderName}
            />
          );
        })
      )}
      {arrowDwn && (
        <div className="arrow-down" onClick={handleScrollDown}>
          <FiChevronsDown />
        </div>
      )}

      <MessageInput group={true} email={email} />
    </ConversationStyled>
  );
}
