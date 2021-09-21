import React from 'react'
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import Create from './Create/Create';
import Delete from './Delete/Delete'
import Edit from './Edit/Edit';


const ModalForm=(props) => {
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

        {props.type == "ADD" && <Create det={props.vehicle} />}

        {props.type == "Update" && <Edit det={props.vehicle} />}

        {props.type == "Details" && (

          <>

            <h4> ID : {props.vehicle.id}</h4>
            <br/>
            <h4> Vehicle Type : {props.vehicle.vtype}</h4>

            <h4> Vehicle Model : {props.vehicle.vmodel}</h4>
            <h4> Fuel Type : {props.vehicle.ftype}</h4>
            <h4> Owner : {props.vehicle.owner}</h4>

            {/* <h6>NIC : {props.employee.nic}</h6>

            <h6>Address : {props.employee.address}</h6>

            <h6>Email : {props.employee.email}</h6>

            <h6>Designation : {props.employee.type}</h6>

            <h6>Mobile No : {props.employee.mobno}</h6>

            <h6>joinedDate : {props.employee.joinedDate}</h6>
 */}
          </>

        )}

        {props.type == "Delete" && <Delete vehicle={props.vehicle} />}

      </ModalBody>



      <Modal.Footer></Modal.Footer>

    </Modal>
    )
}

export default ModalForm
