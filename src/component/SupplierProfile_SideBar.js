import React from 'react'
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const SupplierProfileSideBar = ({SupplierID,profile,onClick}) => {
console.log(profile)
  return (
    <div>
      <Card style={{ width: "18rem", height: "40rem" }}>
        <Card.Img
          variant="top"
          alt="pp"
          src="./images/imgrr.jpg"
          width="200px"
          height="300px"
        />
        <Card.Body>
          <Card.Title>{profile.Name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{profile.SupplierID}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
      
}

export default SupplierProfileSideBar;
