import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

const DeleteForm = ({ employee }) => {
    const token =JSON.parse(sessionStorage.getItem("token"));
  const [validated, setValidated] = useState(false);
  const [reason,setReason] = useState('')
console.log(employee._id)
  const handleSubmit = (event) => {
    const FormerEmployee = {
      name: employee.name,
      nic: employee.nic,
      address: employee.address,
      email: employee.email,
      mobno:employee.mobNo,
      joinedDate: employee.date,
      type: employee.type,
     reason: reason
      
    };
    console.log(token)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.delete(`http://localhost:5000/employee/delete/${employee._id}`).then(() => {
       swal("Deleted","Deleted Employee","success")
      
      }).catch((err) => {
        alert(err)
      })
      axios.post('http://localhost:5000/formerEmp/add', FormerEmployee).then(() => {
        // alert("Added former employee")
      }).catch((err) => {
        alert(err)
      })
       axios.delete(`http://localhost:5000/login//deletebyEmail/${employee.email}`)
        .then(() => {
          console.log("done")
          
        }).catch((err) => {
          alert(err)
        })
      
    }

    setValidated(true);
    console.log(employee)
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
            value={employee.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Reason to Delete</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Reason"
            onChange = {(e)=> {setReason(e.target.value)}}
           
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
