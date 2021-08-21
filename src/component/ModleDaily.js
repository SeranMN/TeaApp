import Modal from "react-bootstrap/Modal";
import { Button, ModalBody } from "react-bootstrap";
import DailySupplyForm from "./DailySupply_Form";

const ModleDaily = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Supply
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <DailySupplyForm/>
      </ModalBody>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModleDaily;
