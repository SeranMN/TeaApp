import Modal from "react-bootstrap/Modal";
import { ModalBody, ModalFooter } from "react-bootstrap";

import Button from "react-bootstrap/Button";

import ProductStock from "./ProductStock";
import axios from "axios";

const ModleDelete = (props) => {
  const deleteProStock=()=>{
    axios
           .delete(`http://localhost:5000/productStock/delete/${props.deleteProductStock._id}`)
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
          Delete Product Stock
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        Are you sure,do you want to delete this record.<br/>
      
        
      </ModalBody>
      <ModalFooter>
      <Button onClick={deleteProStock}  variant="danger">Delete</Button> 
    </ModalFooter>
    </Modal>
    
  );
};

export default ModleDelete;