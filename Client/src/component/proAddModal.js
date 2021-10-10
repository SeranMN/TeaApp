import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import Add from './proAdd'
import './productc.css'
 
const AddModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Add/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}
 
export default AddModal

