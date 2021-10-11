import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import AppFormViewAdmin from './AppFormViewAdmin'


const ViewModalAdmin = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <Modal.Title>Appointment</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <AppFormViewAdmin view = {props.viewappointment}/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}

export default ViewModalAdmin
