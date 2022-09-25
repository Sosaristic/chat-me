// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code

import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMDzKun9Rux1kTQHi-U0K9zOsgB_sd9MY",
  authDomain: "lets-chat-3633d.firebaseapp.com",
  projectId: "lets-chat-3633d",
  storageBucket: "lets-chat-3633d.appspot.com",
  messagingSenderId: "350098751551",
  appId: "1:350098751551:web:6541da191bec2657c1788a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
  export const db = getFirestore(app);