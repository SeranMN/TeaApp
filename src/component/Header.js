import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Gangasiri Tea</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#contactus">Contact Us</Nav.Link>
      <Nav.Link href="#feedback">Feedback</Nav.Link>
      
    </Nav>
    <Nav>
     
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
