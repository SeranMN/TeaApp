import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import SupDeleteForm from "./SupDeleteForm";
import Button from "react-bootstrap/Button";
import DailySupplyTable from "./DailySupply_Table";
import SuppliersTable from "./Supplier_Table";
import axios from "axios"

const ModleDelete = (props) => {
  
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {props.dailysupplyDelete != null
            ? "Delete Supply"
            : "Delete Supplier"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <SupDeleteForm supplier={props.supplierdelete} />
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModleDelete
