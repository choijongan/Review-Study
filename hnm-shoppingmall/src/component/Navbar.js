import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Homd',
        'Sale',
        '지속가능성', 
    ];
  const navigate = useNavigate();

  const goToLogin=()=>{
    navigate('/login');
  };

  const search = (event) => {
    if(event.key === 'Enter') { //Enter 대소문자 구분해야됨.
        // 입력한 검색어를 읽어와서
        //input안의 값은 그냥 value가 아니고 event.target.value을 써줘야됨. 
       let keyword = event.target.value 
       
       // url을 바꿔준다.
       navigate(`/?q=${keyword}`) //파라미터x 서치하는 추가적인 조건에 대해선 쿼리
    }
  }
  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
            <div className='login-button2'>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img
            width={100} 
            src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg' 
             />
        </div>
        <div className='menu-area'>          
                <ul className='menu-list'>    
                    {menuList.map(menu=><li>{menu}</li>)}
                </ul>  
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' onKeyUp={(event)=>search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar