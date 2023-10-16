import { useState, useEffect } from "react"
import {useLocation, useNavigate } from 'react-router-dom';
import QuizService from "../services/QuizService";
import Result from "./Result";
import QuizQuestion from "./QuizQuestion";

export default function Quiz(){
  
    const location = useLocation();
    const navigate = useNavigate();  

    const quizId = location.state.id
    
    const [takeId, setTakeId] = useState(0);
    const [quiz, setQuiz] = useState(undefined);   
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [optionId, setOptionId] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [answers, setAnswers] = useState([]);
    const [isLastQuestion, setIsLastQuestion] = useState(false);

    const nextHandler = () => {      
        if (optionId){
            setAnswers([optionId, ...answers]);           
        }
                  
        setOptionId(undefined);
        setActiveQuestion(activeQuestion + 1);    
        
        if (activeQuestion === quiz.questions.length - 1)
            setIsLastQuestion(true);    
    };

    const handleChange = (e) => {            
        setOptionId(e.target.value);
    }

    useEffect(() => {                                
        QuizService.startTake(quizId)
            .then(r => {                    
                if (r.data.result)
                    setResult(r.data.result);
                setTakeId(r.data.takeId);
            })
        QuizService.getQuiz(quizId)
            .then(r => {
                setQuiz(r.data.quiz);
            })},
        []);
    
    useEffect(() => {
        if (isLastQuestion) {               
            QuizService.sendResponses(takeId, answers)
                .then(r => setResult(r.data))      
            }   
        } , [isLastQuestion]);
                  
    if(result)
        return(
            <Result points={result.points} maxPoints={result.maxPoints}/>
        );
               
    if(quiz && activeQuestion <= quiz.questions.length - 1)
        return(
            <>               
                <QuizQuestion question = {quiz.questions[activeQuestion]} handleChange={handleChange}/>   
                <button className="btn btn-success text-white" onClick={nextHandler}>Next</button>                         
            </>      
        );  
}
