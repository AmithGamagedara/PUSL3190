import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import Rankings from './pages/Rankings';
import Learnings from './pages/Learnings';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/ranking' element={<Rankings/>} />
      <Route path='/learning' element={<Learnings/>} />
     </Routes>
    
    </BrowserRouter>
  )
}

export default App
