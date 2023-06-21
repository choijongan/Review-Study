import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
        <Col lg={2}>
            <img  
            width={50} 
            src='https://www.shutterstock.com/image-vector/unknown-person-vector-icon-flat-260nw-656925412.jpg' />
        </Col>
        <Col lg={10}>
            <div>최종안</div>
            <div>01012345678</div>
        </Col>
    </Row>
  )
}

export default ContactItem