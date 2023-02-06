import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]) //UI에 데이터를 보여준다
    const getProducts = async()=>{ //await은 async를 줘야한다.
      let url= `http://localhost:5000/products`;
      let response = await fetch(url); 
      let data = await response.json();
      setProductList(data)
      //console.log(data)
    }
    useEffect(()=>{
      getProducts()
    },[]);
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