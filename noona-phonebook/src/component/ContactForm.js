import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [name,setName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState(0)
  // const getName=(event)=>{ 모든 event 핸들러는 event라는 매개변수를 넘긴다.
  // setName(event.target.value) form에 있는 정보를 받아볼 수 있다.
  // 밑에 getName하나 때문에 const가 많아져서 함수 만들어 주지 않고 그 자리에 함수를 만들어버림.
  // onChange={} event 타입할 때마다 타입한 값을 읽어와서 저장해줌.(ex:onChange={getName})
  
  return (
    <div>
      <Form>
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