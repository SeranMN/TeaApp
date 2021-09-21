import React from 'react'
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import Create2 from './Create/Create2';
import Delect2 from './Delete/Delect2'
import Edit1 from './Edit/Edit1';


const ModelForm2=(props) => {
    return (
        <Modal

      {...props}

      size="lg"

      aria-labelledby="contained-modal-title-vcenter"

      centered

    >

      <Modal.Header closeButton>

        <Modal.Title id="contained-modal-title-vcenter">

          {props.type == "ADD" && "Add Data"}

          {props.type == "Update" && "Update Data"}

          {props.type == "Delete" && "Delete Data"}

          {props.type == "Details" && "Details"}

        </Modal.Title>

      </Modal.Header>

      <ModalBody>

        {props.type == "ADD" && <Create2 det={props.Delivery} />}

        {props.type == "Update" && <Edit1 det={props.Delivery} />}

        {props.type == "Details" && (

          <>

            <h4>  Dilivery ID : {props.Delivery.id1}</h4>
            <br/>
            <h4> Route : {props.Delivery.route}</h4>

            <h4> Date : {props.Delivery.date}</h4>
            <h4> Tea Leaves : {props.Delivery.tea}</h4>
            <h4> Distance : {props.Delivery.distance}</h4>
            <h4> Driver : {props.Delivery.driver}</h4>

            {/* <h6>NIC : {props.employee.nic}</h6>

            <h6>Address : {props.employee.address}</h6>

            <h6>Email : {props.employee.email}</h6>

            <h6>Designation : {props.employee.type}</h6>

            <h6>Mobile No : {props.employee.mobno}</h6>

            <h6>joinedDate : {props.employee.joinedDate}</h6>
 */}
          </>

        )}

        {props.type == "Delete" && <Delect2 Delivery={props.Delivery} />}

      </ModalBody>



      <Modal.Footer></Modal.Footer>

    </Modal>
    )
}

export default ModelForm2
