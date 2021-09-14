import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import EmpForm from "./EmpForm";
import DeleteForm from "./DeleteForm";
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
          {props.type == "ADD" && "Add Data"}
          {props.type == "Update" && "Update Data"}
          {props.type == "Delete" && "Delete Data"}
          {props.type == "Details" && "Details"}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        {props.type == "ADD" && <EmpForm det={props.employee} />}
        {props.type == "Update" && <EmpForm det={props.employee} />}
        {props.type == "Details" && (
          <>
            <h4> Name : {props.employee.name}</h4>
            <h6>NIC : {props.employee.nic}</h6>
            <h6>Address : {props.employee.address}</h6>
            <h6>Email : {props.employee.email}</h6>
            <h6>Designation : {props.employee.type}</h6>
            <h6>Mobile No : {props.employee.mobno}</h6>
            <h6>joinedDate : {props.employee.joinedDate}</h6>
          </>
        )}
        {props.type == "Delete" && <DeleteForm employee={props.employee} />}
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default Modle;
