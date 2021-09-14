import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import RegEmpSupForm from "./RegEmpSup_Form";

const ModleRegEmpSup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <RegEmpSupForm/>
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModleRegEmpSup;
