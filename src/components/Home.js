import Login from "./Login"
import AuthService from "../services/AuthService";
import { useEffect } from "react";
import QuizzesList from "./QuizzesList"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

    useEffect(() => {
        if (AuthService.getCurrentUser())
          navigate('/QuizzesList');
        else
          navigate('/Login');
    }, []);
      
  }
  