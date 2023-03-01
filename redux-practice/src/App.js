import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  
  let count = useSelector((state) => state.count) //state를 매개변수로 줌.
  let id = useSelector((state)=>state.id)
  let password = useSelector((state)=>state.password)
  let dispatch = useDispatch()
  
  const increase=()=>{
      dispatch({type:'INCREMENT',payload:{num:5}})  //액션은 단순한 객체, 하지만 반드시 type이라는 키와 payload라는 키 있어야됨(payload는 선택사항) ''안에 아무 이름이나 주면됨. INCREMENT(증가)임의로줌
                                //payload는 함수의 매개변수 느낌. 내가 원하는 정보를 보낼 수 있음. 
  }
  const login=()=>{
      dispatch({type:'LOGIN',payload:{id:'jongan',password:'123'} })
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <Box/>
    </div>
  );
}

export default App;
