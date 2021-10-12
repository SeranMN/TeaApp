import React from 'react'
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";

const SupplierProfileSideBar = (supplierDet) => {

  const [supplierprofs, setSupplierProfs] = useState([]);

   useEffect(() => {
     const getSuppliers = () => {
       axios
         .get(`http://localhost:5000/supplier/get/${supplierDet._id}`)
         .then((res) => {
           setSupplierProfs(res.data);
           console.log(res.data);
         })
         .catch((err) => {
           alert(err.msg);
         });
     };
     getSuppliers();
   });

  return (
    <div className="sideBar">
      <Card
        bg="dark"
        text="light"
        style={{ width: "18rem", height: "40rem" }}
      >
        {supplierprofs.map((supplierprof) => (
          <div>
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
        </div>
          ))}
      </Card>
    </div>
  );
};

export default SupplierProfileSideBar;
