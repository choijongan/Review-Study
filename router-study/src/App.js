import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import { Routes, Route } from "react-router-dom";
import './App.css';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/products/:id' element={<ProductDetailPage />}/>
     </Routes> 
    </div>
  );
}

export default App;
