import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'


const Modaldelete = (props) => {
    return (
        <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account permanetly ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger">
            Delete
          </Button>
          <Button variant="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modaldelete
