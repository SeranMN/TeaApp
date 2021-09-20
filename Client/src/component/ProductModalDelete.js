import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import ProductStock from "./ProductStock";
import axios from "axios";

const ModleDelete1 = (props) => {
    
  const deletePro=()=>{
    axios
           .delete(`http://localhost:5000/product/delete/${props.deleteProduct._id}`)
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
      <Modal.Header closeButton>
        <Modal.Title>
          Delete Product 
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
      <Button onClick={deletePro}  variant="danger">Delete</Button> 
        
      </ModalBody>
    </Modal>
  );
};

export default ModleDelete1;