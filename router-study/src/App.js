import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';

function App() {
  const [authenticate, setAuthenticate]=useState(false)
  const PrivateRoute = () => {
      return authenticate == true?<UserPage/>:<Navigate to='/login'/> //Navigate:컴포넌트, 리다이렉트 도와줌
  }
  return (
    <div>
     <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/products/:id' element={<ProductDetailPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/user' element={<PrivateRoute />}/>
     </Routes> 
    </div>
  );
}

export default App;
