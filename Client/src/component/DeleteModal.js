import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteModal = (props) => {
  return (
    <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=> console.log(props.AppDelete)} >Confirm</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteModal
