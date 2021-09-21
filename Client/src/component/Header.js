import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const Header = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      <Navbar.Brand href="/">
      <img
        src="/ggg.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand> 
  <Navbar.Brand href="/">Gangasiri Tea</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">My order</Nav.Link>
      <Nav.Link href="#pricing">Contact Us</Nav.Link>
    </Nav>
    <Nav>
     
              <Nav.Link eventKey={2} >
                {token != null ? (<Link to="/CusProfile.js">
                {token.name}
                </Link>):( <Link to ="/CusLogin.js">
                  Login
                </Link>)}
               
      </Nav.Link>
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
