import './App.css';
import Box from './component/Box';
import { useState } from 'react';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼
//3. 버튼 클릭시 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3,4의 결과로 승패를 나눈다
//6. 승패결과에 따라 테두리 색 바뀜 (승 - 초록, 패 - 빨강, 무승부 - 검정)

const choice = {
  rock:{
    name:'Rock',
    img:'https://thumb.photo-ac.com/47/473ef77f5797ec0fd8619c5236c85fba_t.jpeg'
  },
  scissors:{
    name:'Scissors',
    img:'https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-103.png'
  },
  paper:{
    name:'Paper',
    img:'https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-102.png'
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState('')
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user,computer) =>{
    console.log('user',user,'computer',computer)

    if(user.name == computer.name) {
      return 'tie';
    }else if(user.name =='Rock')
      return computer.name =='Scissors' ? 'win':'lose';
    else if(user.name =='Scissors')
      return computer.name =='Paper' ? 'win':'lose';
    else if(user.name =='Paper')
      return computer.name =='Rock' ? 'win':'lose';
  }

  const randomChoice = () =>{
    let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 어래이로 만들어주는 함수.
    console.log('item array',itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length); //floor 소수점 버리기
    let final = itemArray[randomItem]
    return choice[final]
  }
  return (
  <div>  
    <div className='main'>
      <Box title='You' item={userSelect} result={result}/>
      <Box title='Computer' item={computerSelect} result={result}/>
    </div> 
    <div className='main'>
      <button onClick={() => play('scissors')}>가위</button> 
      <button onClick={() => play('rock')}>바위</button>
      <button onClick={() => play('paper')}>보</button>
    </div>
  </div> 
  );
}
//play안에 넣으면 바로 실행되기 때문에 콜백함수 () => 로 만들어야 한다.
export default App;
