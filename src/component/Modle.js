import Modal from "react-bootstrap/Modal";
import { Button, ModalBody } from "react-bootstrap";
import EmpForm from "./EmpForm";
const Modle = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD Employee
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <EmpForm det = {props.employee} />
      </ModalBody>

      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
};

export default Modle;
