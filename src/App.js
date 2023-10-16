import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizQuestion from './components/QuizQuestion';
import QuizzesList from './components/QuizzesList';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './App.css';

function App() {  

  const Whoops404 = () => {
    return (
    <div>
    <h1>Resource not found</h1>
    </div>
    );
   } 
   
  return (
    <BrowserRouter>
      <div className="App">         
          <div className='columnContainer container justify-content-center bg-light'>   
            <Navbar />       
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Home' element={<Home />} />
                  <Route path='/Quiz' element={<Quiz />} />
                  <Route path='/QuizzesList' element={<QuizzesList />}/>
                  <Route path='/QuizQuestion' element={<QuizQuestion />} />
                  <Route path='/Login' element={<Login />} />
                  <Route path="*" element={<Whoops404 />} />
              </Routes>                                         
          </div>          
      </div>
     </BrowserRouter>    
  );
}

export default App;
