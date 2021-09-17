import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
const Navbar2 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="GREY">
  <Container>
  <Navbar.Brand href="#home">Vehicle Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home2">Home</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
    </Nav>
    <Nav>
     
      {/* <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navbar2
