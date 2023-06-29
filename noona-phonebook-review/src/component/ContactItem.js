import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={2}>
            <img  
            width={50} 
            src='https://www.shutterstock.com/image-vector/unknown-person-vector-icon-flat-260nw-656925412.jpg' />
        </Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem