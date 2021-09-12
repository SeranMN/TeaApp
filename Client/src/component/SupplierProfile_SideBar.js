import React from 'react'
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const SupplierProfileSideBar = ({SupplierID,detail,onClick}) => {

  return (
    <div className="sideBar">
      <Card bg="dark" text="light" style={{ width: "18rem", height: "40rem" }}>
        <Card.Img
          variant="top"
          alt="pp"
          src="./images/imgdp.jpg"
          width="200px"
          height="300px"
        />
        <Card.Body>
          <Card.Title color="grey">Dishan Abeywickrama</Card.Title>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem variant="dark">S001</ListGroupItem>
            <ListGroupItem variant="dark">
              "Samanala", Temple Road, Morawaka
            </ListGroupItem>
            <ListGroupItem variant="dark">991234567V</ListGroupItem>
            <ListGroupItem variant="dark">0712345678</ListGroupItem>
            <ListGroupItem variant="dark">dishanabey@gmail.com</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
      
}

export default SupplierProfileSideBar;
