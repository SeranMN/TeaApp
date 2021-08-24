import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ChangePassword from './ChangePassword'
import { ModalBody } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const Modalpassword = (props) => {
    return (
        <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <ChangePassword />
          

        </ModalBody>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modalpassword
