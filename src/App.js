import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Quiz from './components/Quiz';
import QuizzQuestion from './components/QuizQuestion';
import QuizzesList from './components/QuizzesList';

function App() {  

  const Whoops404 = () => {
    return (
    <div>
    <h1>Resource not found</h1>
    </div>
    );
   } 
   
  return (
    <div className="App">
      <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Quiz' element={<Quiz />} />
              <Route path='/QuizzesList' element={<QuizzesList />}/>
              <Route path='/QuizQuestion' element={<QuizzQuestion />} />
              <Route path="*" element={<Whoops404 />} />
            </Routes>
          </BrowserRouter>    
      </div>     
    </div>
  );
}

export default App;
