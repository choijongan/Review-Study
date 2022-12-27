import './App.css';
import Box from './component/Box';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼
//3. 버튼 클릭시 클린한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3,4의 결과로 승패를 나눈다
//6. 승패결과에 따라 테두리 색 바뀜 (승 - 초록, 패 - 빨강, 무승부 - 검정)
function App() {
  return (
  <div>  
    <div className='main'>
      <Box title='You'/>
      <Box title='Computer'/>
    </div>
    <div className='main'>
      <button>가위</button>
      <button>바위</button>
      <button>보</button>
    </div>
  </div> 
  );
}

export default App;
