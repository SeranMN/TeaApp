import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

    <Container>
         <Navbar.Brand href="#home">
      <img
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand> 
  
    <Navbar.Brand href="#home">Gangasiri Tea</Navbar.Brand>
  
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
    <Navbar.Collapse id="responsive-navbar-nav">
  
      <Nav className="me-auto">
  
        <Nav.Link href="#features">Products</Nav.Link>
  
        <Nav.Link href="#pricing">Pricing</Nav.Link>
  
        
  
      </Nav>
  
      <Nav>
  
        
  
                <Nav.Link  href ="/Admin.js" eventKey={1} >
  
                 
  
          Login
  
          
  
        </Nav.Link>
  
  
  
      </Nav>
  
    </Navbar.Collapse>
  
    </Container>
  
  </Navbar>






    
  )
}

export default Header
 