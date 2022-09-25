import React, { useEffect, useRef, useState } from "react";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import { db } from "../pages/services/firebase";

import { Container } from "./styled/Container";
import { MdEmojiEmotions, MdSend } from "react-icons/md";
import { ButtonStyled } from "./styled/Button.styled";
import Picker from "emoji-picker-react";
import { MessageInputStyled } from "./styled/Conversation.styled";
import pop from "./audio/pop.mp3"

export default function MessageInput({ email, name, photoUrl, group }) {
  // props email is other user email
  const user = useSelector((state) => state.auth.authState);

  const [displayEmoji, setDisplayEmoji] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleInput = (e) => {
    
    setValue(e.target.value);
   
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onEmojiClick = (event, emojiObject) => {
    setValue((prev) => prev + emojiObject.emoji);
  };
  const handleSubmit = (e) => {
    let beat = new Audio(pop)
    e.preventDefault();
    setDisplayEmoji(false);
if (group){
  const messageData = {
    senderName: user.name,
    uid: uuid(),
    message: value,
    time: Timestamp.now(),
  };
  setValue("")
  beat.play()
  const sendMessage = async ()=>{
    await addDoc(collection(db, "groups", email, "messages"), messageData)
  }
  sendMessage()
}
else {
    const messageData = {
      senderName: user.name,
      photoUrl: user.photoUrl,
      uid: uuid(),
      message: value,
      time: Timestamp.now(),
    };
    setValue("");
    beat.play()
    const sendData = async (receiverEmail, senderEmail) => {
      await addDoc(
        collection(db, "messages", receiverEmail, senderEmail),
        messageData
      );
      await addDoc(
        collection(db, "messages", senderEmail, receiverEmail),
        messageData
      );
      await setDoc(doc(db, "users", receiverEmail, "friends", senderEmail), {
        name: user.name,
        photoUrl: user.photoUrl,
        message: value,
        email: user.email,
        time: Timestamp.now(),
      });
      await setDoc(doc(db, "users", senderEmail, "friends", receiverEmail), {
        name: name,
        photoUrl: photoUrl,
        message: value,
        email: email,
        time: Timestamp.now(),
      });
    };
    sendData(email, user.email);
  }
};
  return (
    <MessageInputStyled>
      <form onSubmit={handleSubmit}>
        <Container
          position="relative"
          display="flex"
          width="90%"
          padding=".5rem"
          background="#393b37"
        >
          <Container width="fit-content" height="1.5rem" margin="0 0 6px 0">
            <MdEmojiEmotions
              size={25}
              color="#c8cfc0"
              onClick={() => setDisplayEmoji(!displayEmoji)}
            />
          </Container>

          <textarea

            name="text"
            placeholder="message"
            value={value}
            onInput={handleInput}
            onFocus={() => setDisplayEmoji(false)}
            rows={1}
            ref={inputRef}
           
          />
        </Container>

        <ButtonStyled type="submit" margin="0 0 0 auto" border="none"  disabled={value === ""}>
          <MdSend size={30} color="gray" />
        </ButtonStyled>
      </form>
      <Container>
        {displayEmoji && (
          <Picker
            onEmojiClick={onEmojiClick}
            disableSearchBar={true}
            pickerStyle={{ width: "100%" }}
          />
        )}
      </Container>
    </MessageInputStyled>
  );
}
