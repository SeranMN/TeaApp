import Modal from "react-bootstrap/Modal";
import { Button, ModalBody } from "react-bootstrap";
import EmpForm from "./EmpForm";
const Modle = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD Employee
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <EmpForm det = {props.empDet} />
      </ModalBody>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modle;
