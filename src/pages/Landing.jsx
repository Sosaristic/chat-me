import React, { useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  collection,
  
  getDocs,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "./services/firebase";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { Container } from "../components/styled/Container";
import UserCard from "../components/UserCard";
import { MdSearch } from "react-icons/md";
import { SideNavContext } from "../context/SideNavContext";

export default function Landing(props) {
  const sideNav = useContext(SideNavContext);
  const [users, setUsers] = useState([]);

  const [friends, setFriends] = useState([]);

  const isUser = useSelector((state) => state.auth.authState);
 

  const handleSideNav = () => {
    sideNav.switchTranslate();
  };

  useEffect(() => {
    try {
      const ref = query(
        collection(db, "users", isUser.email, "friends"),
        orderBy("time", "desc")
      );
      const unsubscribe = onSnapshot(ref, (querySnapshot) => {
        let messages = [];
  
        querySnapshot.forEach((doc) => {
          let datas = doc.data();
  
          messages.push(datas);
        });
        setFriends(messages);
      });
      return ()=>{
        unsubscribe()
      }
    } catch (error) {
      console.log(error);
    }
   
  }, [isUser.email, isUser.name]);

  useEffect(() => {
    async function getUsers() {
     
      let values = [];
      const userRef = query(
        collection(db, "users"),
        where("email", "!=", isUser.email)
      );
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        values.push(doc.data());
      });
      setUsers(values);
    }
    try {
      getUsers();
    } catch (error) {
      console.log(error);
    }
    
  }, [isUser.email]);
  
  
  return (
    <Container>
     

      <Header
        handleSideNav={handleSideNav}
        image={isUser.photoUrl}
        title={"Chats"}
        position="fixed"
        fontSize="large"
      />
      <Container
        margin="12vh auto 0 auto "
        display="flex"
        width="90%"
        background="#9ba39d"
        height="auto"
        alignItems="center"
        posiion="relative"
        radius="15px"
        color="#d5e0d8"
        padding="2px 8px"
      
      >
        <Container fontSize="1.5rem" height="fit-content" padding="4px 0 0 0 ">
          <MdSearch />
        </Container>
        <Container
          margin="0 0 0 1rem"
          width="80%"
          height="100%"
          display="flex"
          alignItems="center"
        >
          search
        </Container>
      </Container>
      <Container margin=" 0 0 0 0 ">
        {friends.length === 0 && <Container width="fit-content" margin="2rem auto">No conversation started yet</Container>}
        {friends?.map((item) => {
          return (
            <UserCard
              email={item.email}
              name={item.name}
              message={item.message}
              photoUrl={item.photoUrl}
              key={item.time}
              users={users}
              time={item.time}
            />
          );
        })}
      </Container>

      <BottomNav />
    </Container>
  );
}
