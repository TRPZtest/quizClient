import { useState, useEffect } from "react"
import {useLocation, useNavigate } from 'react-router-dom';
import QuizService from "../services/QuizService";

export default function Quiz({  }){
  
    const location = useLocation();
    const navigate = useNavigate();
    const [optionId, setOptionId] = useState(0);

    const quizId = location.state.id

    console.log(quizId);


    const [takeId, setTakeId] = useState(0);
    const [quiz, setQuiz] = useState({});


    const exitHandler = () => { navigate("/Home") }

    const nextHandler = () => 

    useEffect(() => {                                
        QuizService.startTake(quizId)
            .then(response => {                    
                setTakeId(response.data.takeId)
            })
            .then(() =>{
                QuizService.getQuiz(quizId)
                    .then(response => setQuiz(response.data.quizz))
                    .then()
        });                           
    }, [quizId]);

    useEffect(() => {
        Quiz
    });
    
    return(
        <p>
            
        </p>
    )  
}