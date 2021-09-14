import { Col, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import FloatingLabel from "react-bootstrap/FloatingLabel";
const EmpForm = ({ det }) => {
  const [nic, setNic] = useState(det != null ? det.nic : "");
  const [name, setName] = useState(det != null ? det.name : "");
  const [address, setAddress] = useState(det != null ? det.address : "");
  const [email, setEmail] = useState(det != null ? det.email : "");
  const [date, setDate] = useState(det != null ? det.joinedDate : "");
  const [type, settype] = useState(det != null ? det.type : "");
  const [mobNo, setmobNo] = useState(det != null ? det.mobno : "");
  const [password, setPassword] = useState(det != null ? det.password : "");
   const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const newEmployee = {
     "name":name,
    "nic": nic,
    "address":address,
    "email":email,
    "mobno":mobNo,
    "joinedDate":date,
    "type":type,
    "password":password,
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    
    } else {
      if (det == null) {
        axios.post("http://localhost:5000/employee/add", newEmployee).then
          (() => alert("Employee added")).catch((err) => alert(err))
      }
      else {
        axios.put(`http://localhost:5000/employee/update/:${det._ID}`, newEmployee).then
          (() => alert("Employee added")).catch((err) => alert(err))
      }
      
    }
   

   

    setValidated(true);
  };

  return (
    <>
      <Row className="mb-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide Name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>NIC No.</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid NIC.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <Form.Control.Feedback type="invalid">
                Please provide Address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                required
                type="Number"
                placeholder="Enter mobile No"
                value={mobNo}
                onChange={(e) => setmobNo(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Joined Date</Form.Label>
              <Form.Control reqiured type="date" value={date} onChange={(e) =>setDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Type</Form.Label>
              <Form.Select aria-label="Select Employee Type" value={type} onChange={(e) => settype(e.target.value)}>
              <option>Employee</option>
              <option value="General Manager">General Manager</option>
              <option value="Supliar Manager">Supliar Manager</option>
              <option value="Order Manager">Order Manager</option>
              <option value="Customer Relation Manger">Customer Relation Manger</option>
              <option value="Stock Keeper">Stock Keeper</option>
              <option value="Data Entry Operator">Data Entry Operator</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="password"
                onChange={(e) => setPassword  (e.target.value)}
              />

              <Form.Control.Feedback type="invalid">
                Please provide Address.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default EmpForm;
