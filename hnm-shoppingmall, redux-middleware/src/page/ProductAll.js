import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]) //UI에 데이터를 보여준다
    const [query, setQuery] = useSearchParams()
    const getProducts = async()=>{ //await은 async를 줘야한다.
      let searchQuery=query.get('q') || ''; //q쿼리값이 없으면 디폴트(아무값도 없다)줌.
      console.log('쿼리값은?',searchQuery)
      let url= `http://localhost:5000/products?q=${searchQuery}`;
      let response = await fetch(url); 
      let data = await response.json();
      setProductList(data)
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