 import React from 'react'
 import Modal from 'react-bootstrap/Modal'
 import { ModalBody } from 'react-bootstrap'
 
import Edit from './Edit'
 
const AModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Product
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Edit/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}
 
export default AModal