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
           {(props.type == "ADD"&&("Add Data"))}
          {(props.type == "Update" && ("Update Data"))}
          {(props.type == "Delete" && ("Delete Data"))}
           {(props.type == "Details"&&("Details"))}
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
         { (props.type == "ADD" ) && (<EmpForm det={props.employee} />)}
        { (props.type == "Update" ) && (<EmpForm det={props.employee} />)}
        {(props.type == "Details" &&(
          <>
            <h4> Name : {props.employee.Name}</h4>
        <h6>NIC : {props.employee.nic}</h6>
        <h6>Address : {props.employee.Address}</h6>
        <h6>Email : {props.employee.Email}</h6>
            <h6>Designation : {props.employee.Des}</h6>
          </>))}
         { (props.type == "Delete" ) && (<DeleteForm employee={props.employee} />)}
      </ModalBody>

      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
};

export default Modle;
