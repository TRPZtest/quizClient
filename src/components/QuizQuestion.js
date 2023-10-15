
export default function QuizzQuestion({ question, options, setOptionId }) {
   
    return (
        <div>         
          <h2>{question.text}</h2>
            <ul>
                {options.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
          
        </div>
    )
}