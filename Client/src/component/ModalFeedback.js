import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Feedbackform from './Feedbackform'
import { ModalBody } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const ModalFeedback = (props) => {
    return (
        <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Feedback
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Feedbackform />
          

        </ModalBody>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalFeedback
