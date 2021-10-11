import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const ApprModal = (props) => {

    const ApprApp = () => {
      axios
            .delete(`http://localhost:5000/appointment/delete/${props.ApprAppointment._id}`)
            .then(() => {
              alert("Approved");
            })
            .catch((err) => {
              alert(err);
            });

            const apprappointment = {
                name: props.ApprAppointment.name,
                email: props.ApprAppointment.email,
                position: props.ApprAppointment.position,
                date: props.ApprAppointment.date,
                time: props.ApprAppointment.time,
                concern: props.ApprAppointment.concern,
              };

        axios
          .post("http://localhost:5000/apprAppointment/add", apprappointment)
          .then((data) => console.log(data))
          .catch((err) => alert(err));


    }
  
    return (
      <Modal
          {...props}
          size=""
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>Approve</Modal.Title>
          </Modal.Header>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Cancel
            </Button>
            <Button variant="success" onClick={ApprApp} >Confirm</Button>
          </Modal.Footer>
        </Modal>
    )
  }

export default ApprModal
