import React from 'react'
import Modal from 'react-bootstrap/Modal'
import CustReg from './CustReg'
import { ModalBody } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Feedbackform from './Feedbackform'

const ModalRegister = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <CustReg />
          

        </ModalBody>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalRegister
