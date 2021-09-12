import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DailySupplyTable from "./DailySupply_Table";
import SuppliersTable from "./Supplier_Table";

const ModleDelete = (props) => {
    
    return (
      <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{props.dailysupplyDelete != null ? "Delete Supply" : "Delete Supplier"}</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=> console.log(props.dailysupplyDelete)} >Confirm</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModleDelete
