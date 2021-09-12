import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import ProductStock from './ProductStock'
 
const PsModal = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title >
          Add Product
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <ProductStock/>
      </ModalBody>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  )
}
 
export default PsModal

