import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./services/firebase";

import { SideNavContext } from "../context/SideNavContext";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { Container } from "../components/styled/Container";
import InfoCard from "../components/InfoCard";

export default function People(props) {
  const [users, setUsers] = useState([]);
  const sideNav = useContext(SideNavContext);
  const handleSideNav = () => {
    sideNav.switchTranslate();
  };
  const isUser = useSelector((state) => state.auth.authState);
  useEffect(() => {
    async function getUsers() {
      let values = [];
      const userRef = query(collection(db, "users"), where("email", "!=", isUser.email));
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        values.push(doc.data());
      });
      setUsers(values);
    }
    getUsers();
  }, [isUser.email]);

  

  return (
    <Container padding="6rem 0 0 0">
      <Header
        image={isUser.photoUrl}
        title={"People"}
        position="fixed"
        fontSize="large"
        handleSideNav={handleSideNav}
      />
      {users?.map((doc) => (
        <InfoCard
          photoUrl={doc.photoUrl}
          name={doc.name}
          email={doc.email}
          key={doc.id}
          users={users}
        />
      ))}

      <BottomNav />
    </Container>
  );
}
