import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const SupDeleteForm = ({supplier,supply }) => {
  const [validated, setValidated] = useState(false);

  const newFormerSupplier = {
    name: supplier.name,
    address: supplier.address,
    mobile: supplier.mobile,
    email: supplier.email,
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (supplier != null){
        axios
          .delete(`http://localhost:5000/supplier/delete/${supplier._id}`)
          .then(() => {
            alert("Deleted");
          })
          .catch((err) => {
            alert(err);
          });
        
         axios
           .post("http://localhost:5000/formersupplier/add", newFormerSupplier)
           .then(() => alert("Former Supplier Added"))
           .catch((err) => alert(err));
      }
      else {
         axios
           .delete(`http://localhost:5000/dailysupply/delete/${supply._id}`)
           .then(() => {
             alert("Deleted");
           })
           .catch((err) => {
             alert(err);
           });
      }
    }

    setValidated(true);
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Are You Sure, Do You Want to Delete this Record?
          </Form.Label>
          
        </Form.Group>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Form>
    </>
  );
};

export default SupDeleteForm;
