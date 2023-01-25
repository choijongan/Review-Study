import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<AboutPage />}/>
     </Routes> 
    </div>
  );
}

export default App;
