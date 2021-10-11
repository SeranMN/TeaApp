import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import AppForm from './AppForm'

const BtnModal = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.updAppointment != null ? "Edit Appointment" : "Appointment"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <AppForm upd={props.updAppointment}/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}

export default BtnModal
