import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import QuizService from "../services/QuizService"

export default function QuizzesList(){
    // const quizzes = QuizService.getQuizzes();

    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {       
        QuizService.getQuizzes()
          .then(response => setList(response.data.quizzes))
      }, []);

    const navigateToQuiz = (e, id) => {      
        navigate("/Quiz", {state: {id: id}})
      }
    
    const listItem = (item) => {
        return(
          <li key={item.id} >           
            <button onClick={(e) => navigateToQuiz(e, item.id) } className="btn btn-primary">
              {item.name}
            </button>
          </li>
        )
    };
    
    return(
        <ul>       
            {list.map(item => listItem(item))}      
        </ul>      
    )
}