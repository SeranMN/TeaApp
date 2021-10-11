import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useState } from "react";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const Modle = (props) => {
  const [rows, setRows] = useState();
  useEffect(() => {
    const getEmployeee = () => {
      axios
        .get("http://localhost:5000/employee")
        .then((res) => {
          setRows(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getEmployeee();
  }, []);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },

    {
      field: "nic",
      headerName: "NIC",
      width: 200,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 255,
    },
    {
      field: "type",
      headerName: "Desgnation",
      width: 160,
      editable: true,
    },
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <div style={{ height: 400, width: "100%" }}>
          {rows && (
            <DataGrid
              components={{
                Toolbar: CustomToolbar,
              }}
              getRowId={(row) => row._id}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          )}
        </div>
      </ModalBody>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default Modle;
