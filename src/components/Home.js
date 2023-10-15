import Login from "./Login"
import React, { useState } from "react";
import AuthService from "../services/AuthService";

import QuizzesList from "./QuizzesList"

export default function Home({  }) {

    const [token, setToken] = useState(localStorage.getItem("token"));
    
    if (token)
      return (
        <>          
          <QuizzesList />
        </>
      );
    else
      return (
        <>
          <Login setToken = { setToken }/>
        </>
      );
  }
  