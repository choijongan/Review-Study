import React from 'react'
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => { //네비게이션 메뉴
  return (
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
                <img width={100} src='https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to='/' className='nav-item'>Home</Link>
                <Link to='/Movies' className='nav-item'>Movies</Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
  


export default Navigation