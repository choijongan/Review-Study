import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체 상품페이지에서는 전체 상품 보기가능
//3. 로그인 버튼 누르면 로그인 페이지
//3-1. 상품디테일 눌렀으나, 비로그인시 로그인페이지가 나옴
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지보기 가능
//5. 로그아웃 버튼 클릭하면 로그아웃
//5-1. 로그아웃이되면 상품 디테일 페이지 볼 수 없다, 다시 로그인 페이지가 보인다
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//7. 상품을 검색할 수 있다. 
//navbar는 전체 페이지에 고정이므로 라우터밖에 만들어준다.
function App() {
  const[authenticate,setAuthenticate]=useState(false) //false 비로그인, true 로그인
  useEffect(()=>{
    console.log('aaaaa',authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} /> 
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
    //login에서 setAuthenticate 프롭스로 보내주면 로그인 할 때 true,false 변경가능
  );
}

export default App;
