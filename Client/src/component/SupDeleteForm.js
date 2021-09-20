import React from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const SupDeleteForm = ({ supplier }) => {
    
     const [validated, setValidated] = useState(false);

     const handleSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       } else {
         axios
             .delete(`http://localhost:5000/supplier/delete/${supplier._id}`)
             .then(() => {
             alert("Deleted");
           })
           .catch((err) => {
             alert(err);
           });
       }

       setValidated(true);
     };
    return (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Supplier ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter NIC"
              value={supplier.nic}
              disabled="disabled"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              disabled="disabled"
              type="text"
              placeholder="Enter Name"
              value={supplier.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reason to Delete</Form.Label>
            <Form.Control required type="text" placeholder="Enter Reason" />
            <Form.Control.Feedback type="invalid">
              Please provide Reason.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="danger" type="submit">
            Delete
          </Button>
        </Form>
      </>
    );
}

export default SupDeleteForm
