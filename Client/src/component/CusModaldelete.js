import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const Modaldelete = (props) => {
  const onDelete = () =>{
    
    axios.delete(`http://localhost:5000/customer/delete/${props.profile._id}`)
    .then(() => {
      swal("Deleted!", "Successfully Deleted", "success");
        navigate();
      }).catch((err) => {
        alert(err)
      })
      
  }
  const history = useHistory();
  const navigate = () => {
    history.push("/CusLogin.js");
}

  
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
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Modaldelete
