import { useState, useEffect } from "react"
import {useLocation, useNavigate } from 'react-router-dom';
import QuizService from "../services/QuizService";
import QuizQuestion from "./QuizQuestion";

export default function Quiz({  }){
  
    const location = useLocation();
    const navigate = useNavigate();  

    const quizId = location.state.id

    const [takeId, setTakeId] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [optionId, setOptionId] = useState(0);

    const exitHandler = () => { navigate("/Home") };

    const nextHandler = () => {};

    useEffect(() => {                                
        QuizService.startTake(quizId)
            .then(r => {                    
                setTakeId(r.data.takeId);
            })
        QuizService.getQuiz(quizId)
            .then(r => {
                setQuiz(r.data.quiz);
            })},
        [quizId]);

   if(quiz)
    return(
        <QuizQuestion question = {quiz.questions[0]} setOptionId={setOptionId}  />
    );  
}