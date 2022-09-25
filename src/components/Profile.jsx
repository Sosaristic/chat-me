import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../pages/services/firebase";
import { signOut } from "firebase/auth";
import { loginActions } from "../redux/AuthSlice";
import { themeActions } from "../redux/ThemeSlice";
import { Theme } from "./styled/Theme";


import { ProfileStyled } from "./styled/Profile.styled";
import { SideNavContext } from "../context/SideNavContext";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import ImageCard from "./ImageCard";
import { Container } from "./styled/Container";
import { ButtonStyled } from "./styled/Button.styled";


export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const isUser = useSelector((state) => state.auth.authState);
  const theme = useSelector((state)=>state.theme.theme)
  const sideNav = useContext(SideNavContext);
  const [checkValue, setCheckValue] = useState(false)

  const handleSignOut = ()=>{
signOut(auth).then(()=>{
dispatch(loginActions.logout())
navigate("/login", {replace: true})

}).catch((err)=>{
    console.log(err);
})
  }

  const handleCheckBox = ({target})=>{
setCheckValue(!checkValue)
  }

useEffect(()=>{
  if(checkValue){
    dispatch(themeActions.darkTheme(Theme.dark))
  }
  if(!checkValue){
    dispatch(themeActions.lightTheme(Theme.light))
  }
}, [checkValue, dispatch])
  return (
    <ProfileStyled translateX={sideNav.translate} background={theme.background} color={theme.color}>
      <div className="back">
        <MdOutlineArrowBack onClick={() => sideNav.switchTranslate()} />
      </div>
      <Container  position="relative" margin="1rem auto" display="flex" justify="center">
        <ImageCard src={isUser.photoUrl} width="5rem" height="5rem"/>
      </Container>
      <div className="name">{isUser.name}</div>
      <Container display="flex" padding="10px" margin="1rem 0 0 0">
        <div className="dark-icon">
          <FaMoon />
        </div>
        <div className="mode">Dark Mode</div>
        <div className="toogle-container">
          <label htmlFor="toogle" className="label">
            <input
              type="checkbox"
              className="checkbox"
              name="checkbox"
              id="toogle"
              value={checkValue}
              onChange={handleCheckBox}
            />

            <span className="inner"></span>
          </label>
        </div>
      </Container>
      <ButtonStyled
        width="fit-content"
        margin="6rem auto"
        border=".5px solid grey"
        radius="12px"
        padding="8px 20px"
        onClick={handleSignOut}
      >
        Sign Out
      </ButtonStyled>
    </ProfileStyled>
  );
}
