import { Col, Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//import FloatingLabel from "react-bootstrap/FloatingLabel";
const EmpForm = ({ det }) => {
  const [open1, setOpen1] = React.useState(false);
  const handleClick = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

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
     //event.preventDefault()
    const newEmployee = {
      name: name,
      nic: nic,
      address: address,
      email: email,
      mobno: mobNo,
      joinedDate: date,
      type: type,
    };
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (det == null) {
        const newLogin = {
      name: name,
      email: email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
      type: type,
    };
        axios
          .post("http://localhost:5000/employee/add", newEmployee)
          .then(() => handleClick())
          .catch((err) => alert(err));
        axios
          .post("http://localhost:5000/login/add", newLogin)
          .then(() => handleClick())
          .catch((err) => alert(err));
      } else {
        axios
          .put(`http://localhost:5000/employee/update/${det._id}`, newEmployee)
          .then(() =>handleClick())
          .catch((err) => alert(err));
      }
    }

    setValidated(true);
  };

  return (
    <>
      <Snackbar
        open={open1}
        autoHideDuration={3000}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: "top",

          horizontal: "center",
        }}
      >
      <Alert onClose={handleClose1} severity="success" sx={{ width: "100%" }}>
        {det != null ? `Sucessfully Edited!` : `Sucessfully Added!`}
        </Alert>
        </Snackbar>
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
                 pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
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
                 pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
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
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter mobile No"
                pattern="[0-9]{10}"
                value={mobNo}
                onChange={(e) => setmobNo(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Joined Date</Form.Label>
              <Form.Control
                reqiured
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Type</Form.Label>
              <Form.Select
                aria-label="Select Employee Type"
                value={type}
                onChange={(e) => settype(e.target.value)}
              >
                <option>Employee</option>
                <option value="General Manager">General Manager</option>
                <option value="Supliar Manager">Supliar Manager</option>
                <option value="Order Manager">Order Manager</option>
                <option value="Customer Relation Manger">
                  Customer Relation Manger
                </option>
                <option value="Stock Keeper">Stock Keeper</option>
                <option value="Data Entry Operator">Data Entry Operator</option>
                <option value="HR Manager">HR Manager</option>
                <option value="Receptionist">receptionist</option>
                <option value="Vehicle Manager">Vehicle Manager</option>
                <option value="Product Manger">Product Manager</option>
              </Form.Select>
            </Form.Group>
           
            {det == null && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                <Form.Control.Feedback type="invalid">
                  Please provide Address.
                </Form.Control.Feedback>
              </Form.Group>
            )}
          </Col>
            
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default EmpForm;
