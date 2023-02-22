import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {

  const [count,setCount] = useState(0)
  const dispatch = useDispatch()
  
  const increase=()=>{
      dispatch({type:'INCREMENT'})  //액션은 단순한 객체, 하지만 반드시 type이라는 키와 payload라는 키 있어야됨(payload는 선택사항) ''안에 아무 이름이나 주면됨. INCREMENT(증가)임의로줌
      setCount(count+1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
    </div>
  );
}

export default App;
