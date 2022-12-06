import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './page/Home';

function App() {
  const nav = useNavigate()
    if(localStorage.getItem("Authorization" === null)){
      nav('/')
    }
  return (
    <div className='w-full'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;