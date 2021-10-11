import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const AppDeleteModal = (props) => {

  const DeleteApp = () => {
    axios
          .delete(`http://localhost:5000/appointment/delete/${props.DeleteAppointment._id}`)
          .then(() => {
            alert("Deleted");
          })
          .catch((err) => {
            alert(err);
          });
  }

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
          <Button variant="danger" onClick={DeleteApp} >Confirm</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AppDeleteModal
