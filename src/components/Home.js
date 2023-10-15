import Login from "./Login"
import React, { useState } from "react";
import Navbar from "./Navbar";

import QuizzesList from "./QuizzesList"

export default function Home() {

    const [token, setToken] = useState(localStorage.getItem("token"));
    
  

    if (token)
    return (
          <>         
            <Navbar setToken={setToken}/>
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
  