import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {
    const productList = useSelector((state)=>state.product.productList); //세부적이게 작성해야됨. product안에 있는 리스트를 주세요.
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch()
    const getProducts = ()=>{ //await은 async를 줘야한다. productaction에서 async로줌.
      let searchQuery=query.get('q') || ''; //q쿼리값이 없으면 디폴트(아무값도 없다)줌.
      console.log('쿼리값은?',searchQuery)
      dispatch(productAction.getProducts(searchQuery));
      //console.log(data)
    }
    useEffect(()=>{
      getProducts()
    },[query]); //쿼리를 유심히 봐주세요. 한번만 실행하지 마시공
  return (
    <div>
         <Container>
            <Row>
              {productList.map(menu=> <Col lg={3}>
                <ProductCard item={menu} />
              </Col>)}
            </Row>
        </Container>
        <ProductCard />
    </div>
  )
}

export default ProductAll