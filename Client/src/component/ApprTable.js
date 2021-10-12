import React from 'react'
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { useState , useEffect} from "react";
import SearchBar from './AppSearchBar';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import AppDeleteModal from './AppDeleteModal';
import axios from 'axios';
import Sidenavbar from './AppSidenavbar';
import MaterialTable from "material-table";
import PrintIcon from "@material-ui/icons/Print";
import Clear from "@material-ui/icons/Clear";
import jsPDF from "jspdf";
import "jspdf-autotable";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Checkbox } from '@material-ui/core';



const ApprTable = () => {
  const [modaldelete, setModalDelete] = useState(false)
  const [appointments, setAppointments] = useState([]);
  const [DeleteAppointment, setDeleteAppointment] = useState('');

  const columns = [

    { title: "Appointment_ID", field: "_id", },
    { title: "Appointers Name", field: "name", },
    { title: "Email", field: "email", },
    { title: "Officer's Position", field: "position", },
    { title: "Date", field: "date", },
    { title: "Time", field: "time", },
    { title: "Concern", field: "concern", },
    // { title: "Done",  },
    // { title: "Delete", field: "", }
  ]

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Appointments", 70, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: appointments,
    });
    doc.save("TeaFactory_Appointments.pdf");
  };


  useEffect(() => {
    const getAppointments = () => {
      axios
        .get("http://localhost:5000/apprAppointment")
        .then((res) => {
          setAppointments(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getAppointments();
  });

  return (
    <div>
      <Sidenavbar/>
    <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

      <br/>
      {/* <SearchBar/> */}
      <br/>
      <br/>

      <MaterialTable
          title="Appointments"
          columns={columns}
          data={appointments}
          options={{
            headerStyle: { backgroundColor: "#060b26", color: "white" },                       
          }}
          actions={[
            {
              icon: () => <PrintIcon />,
              tooltip: "Generate Report",
              onClick: () => downloadPdf(),
              isFreeAction: true,
            },
            {
              icon:Checkbox,
              selection: true,
            }
          ]}
      />

      <AppDeleteModal show={modaldelete}
        onHide={() => setModalDelete(false)}
        DeleteAppointment={DeleteAppointment}/>

      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    </div>
  )
}

export default ApprTable
