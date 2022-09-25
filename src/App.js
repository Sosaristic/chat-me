import React, { useState, useContext, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import GlobalStyles from "./components/styled/Global";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Theme } from "./components/styled/Theme";
import { themeActions } from "./redux/ThemeSlice";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
const isUser = useSelector((state)=>state.auth.authState)

 
 

  return (
    <>
      <div>
        <GlobalStyles />

        <Routes>
          <Route
            exact
            path="/*"
            element={
              <ProtectedRoute auth={isUser}>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
