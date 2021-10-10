import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import ReportForm from "./Report_Form";

const ModleReport = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Generate Monthly Invoice</Modal.Title>
      </Modal.Header>
      <ModalBody>
              <ReportForm report={props.supplierreport}/>
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModleReport;
