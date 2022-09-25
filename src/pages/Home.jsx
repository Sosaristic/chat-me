import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import Profile from "../components/Profile";

import { Container } from "../components/styled/Container";
import { RoutesStyled } from "../components/styled/Routes.styled";
import Conversation from "./Conversation";
import Groups from "./Groups";
import Landing from "./Landing";
import People from "./People";
import {SideNavContext, translate} from "../context/SideNavContext"
import GrpConversation from "./GrpConversation";

function Home(props) {
const theme = useSelector((state)=>state.theme.theme)
const switchTranslate = ()=>{
    setSideNav((prev)=>({
      translate: prev.translate === translate.translateLeft? translate.translateRight : translate.translateLeft,
        switchTranslate
    })
        
    )
}

const [sideNav, setSideNav] = useState({
    translate: translate.translateLeft,
    switchTranslate
})




  return (
    <SideNavContext.Provider value={sideNav}>
    <Container display="flex">
    <Profile />
    <RoutesStyled backgroundColor={theme.background} color={theme.color}>
     <Routes>
      <Route index element={<Landing />} />
      <Route exact path="people" element={<People />} />
      <Route exact path="groups" element = {<Groups />} />
      <Route exact path="conversation/:emailID" element={<Conversation />} />
      <Route exact path="groupConversation/:groupName" element= {<GrpConversation />} />
      </Routes> 
    </RoutesStyled>
    </Container>
    </SideNavContext.Provider>
  );
}

export default Home;
