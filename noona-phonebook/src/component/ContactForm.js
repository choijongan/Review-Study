import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name,setName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState(0)
  // const getName=(event)=>{setName(event.target.value)} 모든 event 핸들러는 event라는 매개변수를 넘긴다.
  //                        event.target.value로 form에 있는 정보를 받아볼 수 있다.
  // onChange쪽 getName하나 때문에 const가 많아져서 함수 만들어 주지 않고 그 자리에 함수(setName)을 바로 줘버림.
  // onChange={}라는 event는 입력할 때마다 타입한 값을 읽어와서 저장해줌.(ex:onChange={getName})
  const dispatch = useDispatch() //useDispatch는 action을 던져준다.
  const addContact=(event)=>{
      event.preventDefault() //계속 리프레쉬 되는걸 막습니다. 
      dispatch({type:'ADD_CONTATCT' , payload:{name, phoneNumber}}) //던져지는 action은 항상 type과 payload 키를 가지고 있다.
                                                //payload:{name:name, phoneNumber:phoneNumber} 이름과 키값이 같다면 하나로 줄여도 된다.          
    }                                                       

  return (
    //Form은 onclick을 하면 안되고, onSubmit으로 줘야한다.
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control 
             type="text" 
             placeholder="이름을 입력해주세요." 
             onChange={(event)=>setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control 
            type="number"
            placeholder="전화번호를 입력해주세요." 
            onChange={(event)=>setPhoneNumber(event.target.value)} 
          />
        </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
   )
  } 
  

export default ContactForm