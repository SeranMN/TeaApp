import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody } from "react-bootstrap";
const AttendanceModal = (props) => {
     const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    
    return (
        <>
       
            <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {(props.employee != null?("Update Data"):("Add Employee"))}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
                    <h1>Name </h1>
                    <h2>Time :{time}</h2>
                    <h2>Date:  {date}</h2>
      </ModalBody>

      <Modal.Footer>
         <Button variant = "success" onClick = {props.onHide} >Check In</Button>
      </Modal.Footer>
    </Modal> 
        </>
    );
}

export default AttendanceModal
