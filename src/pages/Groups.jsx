import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "./services/firebase";

import { SideNavContext } from "../context/SideNavContext";

import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { Container } from "../components/styled/Container";
import InfoCard from "../components/InfoCard";
import groupImg from "../components/images/group.svg";
import education from "../components/images/education.svg";
import entertainment from "../components/images/entertainment.svg";
import politics from "../components/images/politics.svg";
import sports from "../components/images/sports.svg";
import technology from "../components/images/technology.svg";

export default function Groups() {
  const sideNav = useContext(SideNavContext);
  const [groups, setGroups] = useState([]);

  const isUser = useSelector((state) => state.auth.authState);
  const handleSideNav = () => {
    sideNav.switchTranslate();
  };
  useEffect(() => {
    async function getUsers() {
      try {
        let values = [];
        const userRef = query(collection(db, "groups"));
        const querySnapshot = await getDocs(userRef);
        querySnapshot.forEach((doc) => {
          values.push(doc.data());
        });
        setGroups(values);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);
  

  const GroupImage = (image) => {
    switch (image) {
      case "education":
        return education;

      case "entertainment":
        return entertainment;
      case "politics":
        return politics;
      case "sports":
        return sports;
      case "technology":
        return technology;

      default:
        return groupImg;
        
    }
  };
  return (
    <Container>
      <Header
        image={isUser.photoUrl}
        title="Groups"
        position="fixed"
        fontSize="large"
        handleSideNav={handleSideNav}
        
      />
      <Container margin="5rem 0 1rem 0 " overflow="auto">
        {groups?.map((item) => {
          return (
            <InfoCard
              key={item.date}
              name={item.title}
              photoUrl={GroupImage(item.title)}
              imgHeight="2.5rem"
              imgWidth="2.5rem"
              email={item.title}
              grpName={item.title}
            />
          );
        })}
      </Container>
      <BottomNav />
    </Container>
  );
}
