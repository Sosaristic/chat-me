import React, { useEffect, useRef, useState,useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import {
  collection,
 
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./services/firebase";

import { Container } from "../components/styled/Container";
import { ConversationStyled } from "../components/styled/Conversation.styled";
import { MdOutlineArrowBack } from "react-icons/md";
import MessageInput from "../components/MessageInput";
import MessageCard from "../components/MessageCard";
import Empty from "../components/Empty";
import ImageCard from "../components/ImageCard";
import { FiChevronsDown } from "react-icons/fi";

export default function Conversation() {
  // scroll functions
  const handleScroll = () => {
    let scrollPositionFromBottom = verticalScroll();

    scrollPositionFromBottom >= 100 ? setArrowDwn(true) : setArrowDwn(false);
  };

  const verticalScroll = () => {
    const scrollHeight = ref.current.scrollHeight;
    const scroll = ref.current.scrollTop;
    let result = scrollHeight - scroll;
    let client = ref.current.clientHeight;

    const scrollPositionFromBottom = result - client;
    return scrollPositionFromBottom;
  };
  const handleScrollDown = () => {
    const height = ref.current.scrollHeight;
    ref.current?.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };

  const [chats, setChats] = useState([]);
  const [arrowDwn, setArrowDwn] = useState(false);

  const isUser = useSelector((state) => state.auth.authState);

  const theme = useSelector((state) => state.theme.theme);

  const ref = useRef();
  const navigate = useNavigate();
  //get data from location
  const location = useLocation();
  const { email, users } = location.state;
  if (email) {
  }
  const personalDetails = users?.filter((user) => user.email === email);
  const { name, photoUrl } = personalDetails[0] || {};

  useEffect(() => {
    const ref = query(
      collection(db, "messages", isUser.email, email),
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
  }, [email, isUser.email]);
  useEffect(() => {
    let scrollPositionFromBottom = verticalScroll();
    const height = ref.current.scrollHeight;
    // if scroll is at the botom
    if (scrollPositionFromBottom === 0) {
      ref.current?.scrollTo({ top: height, left: 0, behavior: "smooth" });
    } else {
      ref.current?.scrollTo({ top: height, left: 0, behavior: "auto" });
    }
    
  }, [chats]);

  useCallback(()=>{
    handleScroll()
  }, [handleScroll])
  return (
    <ConversationStyled
      ref={ref}
      background={theme.backgroundImage}
      color={theme.color}
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
          <ImageCard src={photoUrl} width="3rem" height="3rem" />
        </Container>
        <Container margin="0 0 0 2rem" textTransform="capitalize">
          {name}
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
            />
          );
        })
      )}
      {arrowDwn && (
        <div className="arrow-down" onClick={handleScrollDown}>
          <FiChevronsDown />
        </div>
      )}
      <MessageInput email={email} name={name} photoUrl={photoUrl} />
    </ConversationStyled>
  );
}
