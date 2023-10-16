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
          <div className="row my-sm-3" key={item.id} > 
            <div className="col-md-5>">
              <button onClick={(e) => navigateToQuiz(e, item.id) } className="btn btn-primary">
                {item.name}
              </button>
            </div>          
          </div>
        )
    };
    
    return(
        <>
          <h3>Quizzez:</h3>
          {list.map(item => listItem(item))} 
        </>                  
    )
}