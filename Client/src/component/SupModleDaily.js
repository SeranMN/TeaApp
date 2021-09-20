import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
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
          {props.supplyDet != null ? "Edit Supply" : "Add New Supply"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <DailySupplyForm det={props.supplyDet} />
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModleDaily;
