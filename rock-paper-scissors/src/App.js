import './App.css';
import Box from './component/Box';

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
    img:'https://mblogthumb-phinf.pstatic.net/20151004_78/shdudtn1234_1443897618525T4jeq_JPEG/%B0%A1%C0%A7%B9%D9%C0%A7%BA%B8_%C0%CC%B1%E2%B4%C2%B9%FD%B0%FA_%C0%DF%C7%CF%B4%C2%B9%FD_%BD%C5%C0%C7_%C7%D1%BC%F6%B8%A6_%B9%E8%BF%F6%BA%B8%C0%DA.jpg?type=w2'
  }
}
function App() {
  const play = (userChoice) => {
    console.log('선택됨!',userChoice)
  }
  return (
  <div>  
    <div className='main'>
      <Box title='You'/>
      <Box title='Computer'/>
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
