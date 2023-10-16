import { useState, useEffect } from 'react'

import QuizService from "../services/QuizService";

export default function QuizQuestion({ question, handleChange }) {
   
    console.log(question);
    const [options, setOptions] = useState([]);

    useEffect(() => {                                
        QuizService
            .getOptions(question.id)
            .then(r => setOptions(r.data.options));                         
    }, [question.id]);

    const itemRender = (item) => {
        return(
            <div  key={item.id} className='my-sm-3'>
                <input onChange={handleChange} id={'option' + item.id} name='option' type='radio' value={item.id} />
                <label htmlFor={'option' + item.id}>{item.answerText}</label>
            </div>
        );
    }

    return (
        <div>         
          <h2>{question.questionText}</h2>           
            {options.map(item => itemRender(item))}                    
        </div>
    )
}