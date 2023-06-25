 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Registrate from './components/Registrate/Registrate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registrate' element={<Registrate/>}/> 
      </Routes>
    </div>
  );
}

export default App;
