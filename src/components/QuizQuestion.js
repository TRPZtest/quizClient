import { useState, useEffect } from 'react'

import QuizService from "../services/QuizService";

export default function QuizzQuestion({ question, setOptionId }) {
   
    const [options, setOptions] = useState([]);

    useEffect(() => {                                
        QuizService
            .getOptions(question.id)
            .then(r => setOptions(r.data.options));                         
    }, [question.id]);




    return (
        <div>         
          <h2>{question.questionText}</h2>
            <ul>
                {options.map(item => <li key={item.id}>{item.answerText}</li>)}
            </ul>          
        </div>
    )
}