import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import employee from "../Img/employee.png";
import sup from "../Img/supplier.png"
import Container from 'react-bootstrap/Container'
import stock from '../Img/stock.png'
import vehicle from '../Img/vehicle.png'
import customer from '../Img/cus.png'
import product from '../Img/product.png'
import order from '../Img/order.png'
import appointment from '../Img/appointment.png'
import { Link } from "react-router-dom"
import Header from "./Header";

const AdminDashBoard = () => {
  return (
    <div>
      <Header/>
    <Container>
      <Row md={1} md={4} className="g-4" >
          <Col>
            <Link to = "/Employee.js">
            <Card bg="success" text="light" style={{ width: "18rem", height :"25rem"}}>
            <Card.Img variant="top" src={employee} />
            <Card.Body>
              <Card.Title>Employee Management</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        <Col>
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
            <Card.Img variant="top" src={sup} />
            <Card.Body>
              <Card.Title>Supplier Management </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
            <Card.Img variant="top" src={customer} />
            <Card.Body>
              <Card.Title>Customer Management</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
            <Card.Img variant="top" src={vehicle} />
            <Card.Body>
              <Card.Title>Vehicle Management</Card.Title>
            </Card.Body>
          </Card>
          </Col>
     
        
        <Col >
          <Card bg="success" text="light" style={{ width: "18rem" , height :"25rem"}}>
              <Card.Img variant="top" src={stock} />
            <Card.Body>
              <Card.Title>Stock Management</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
              <Card.Img variant="top" src={product} />
            <Card.Body>
              <Card.Title>product Management</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
              <Card.Img variant="top" src={order} />
            <Card.Body>
              <Card.Title>Orders Management</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col >
          <Card bg="success" text="light" style={{ width: "18rem", height :"25rem" }}>
              <Card.Img variant="top" src={appointment} style = {{height:"18rem"}} />
            <Card.Body>
              <Card.Title>appointment Management</Card.Title>
            </Card.Body>
          </Card>
          </Col>
        
      </Row>
      </Container>
      </div>
       
  );
};

export default AdminDashBoard;

    