import React from "react";
import { LoginStyled } from "../components/styled/Login.styled";
import logo from "../components/images/logo.svg";
import { GoogleButton } from "react-google-button";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux"
import { loginActions } from "../redux/AuthSlice";
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { collection, setDoc, doc } from "firebase/firestore"; 
import {auth, db} from "./services/firebase"



function Login(props) {
  const userRef = collection(db, "users")
  const provider = new GoogleAuthProvider()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
const handleLogin = () =>{
  try {
    signInWithPopup(auth, provider).then((result)=>{
      const user =result.user
      const userDetails = {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        id: user.uid
      }
       
       setDoc(doc(userRef, user.email), {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        id: user.uid
      })
      
        dispatch(loginActions.addUser(userDetails))
        navigate("/", {replace: true,})
        })
        .catch((error)=>{
          console.log(error);
        })
  } catch (error) {
    console.log(error);
  }
  

}

   
  return (
    <LoginStyled>
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="google">
        <GoogleButton  onClick={handleLogin} type="light"/>
      </div>
    </LoginStyled>
  );
}

export default Login;
