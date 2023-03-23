import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { detailAction } from '../redux/actions/detailAction';

const ProductDetail = () => {
  let{id} = useParams()
  const product = useSelector(state=>state.detail.selectedItem)  //api 데이터를 state에 담기
  //state.dateil에서 detail은 index.js에서 이름을 준 것.
  const dispatch = useDispatch()
  const getProductDetail = ()=>{
  console.log('아이디값은?', id)
  dispatch(detailAction.getProductDetail(id))
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
        <Row>
            <Col className='product-img'>
                <img src={product?.img}/>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}원</div>
                <div>{product?.choice ==true?'concious choie':''}</div>
                <Dropdown>
      <Dropdown.Toggle variant="#" id="dropdown-basic">
        사이즈 선택
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail