import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modle from "./Modle";

const EmpprofMoodle = (props) => {
  
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          EMPLOYEE PROFILE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> Name : {props.employee.Name}</h4>
        <h6>NIC : {props.employee.nic}</h6>
        <h6>Address : {props.employee.Address}</h6>
        <h6>Email : {props.employee.Email}</h6>
        <h6>Designation : {props.employee.Des}</h6>
      </Modal.Body>
      <Modal.Footer>
        
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
      </Modal>
  );
};

export default EmpprofMoodle;
