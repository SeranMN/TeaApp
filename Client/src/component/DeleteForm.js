import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
const DeleteForm = ({ employee }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Employee No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter NIC"
            value={employee.nic}
            disabled="disabled"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            disabled="disabled"
            type="text"
            placeholder="Enter Name"
            value={employee.Name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Reason to Delete</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Reason"
           
          />
          <Form.Control.Feedback type="invalid">
            Please provide Reason.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="danger" type="Delete">
       Delete
        </Button>
      </Form>
    </>
  );
};

export default DeleteForm;
