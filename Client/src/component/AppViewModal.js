import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import AppFormView from './AppFormView'

const ViewModal = (props) => {
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
        <AppFormView/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}

export default ViewModal
