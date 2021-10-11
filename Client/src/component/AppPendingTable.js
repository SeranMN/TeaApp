import React from 'react'
import ViewBtn from './AppViewBtn';
import { Button } from 'react-bootstrap'
import Table from "react-bootstrap/Table";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { useState,useEffect } from 'react';
import ViewModalAdmin from './AppViewModalAdmin';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ApprTable from './ApprTable';
import axios from 'axios';
import Sidenavbar from './AppSidenavbar';
import AppDeleteModal from './AppDeleteModal';
import swal from 'sweetalert';
import ApprModal from './ApprModal';
import emailjs from 'emailjs-com';


const PendingTable = () => {
    const [viewmodalShow, setViewModalShow] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [viewAppointment, setViewAppointment] = useState('');
    const [modaldelete, setModalDelete] = useState(false)
    const [DeleteAppointment, setDeleteAppointment] = useState('');
    const [ApprAppointment, setApprAppointment] = useState('');
    const [modalAppr, setModalAppr] = useState(false);

    function message(e) {
    }

    useEffect(() => {
      const getAppointments = () => {
        axios
          .get("http://localhost:5000/appointment")
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
    <div style={{ marginLeft: "420px", marginTop: "20px", marginRight: "420px"}}>
      <h2><u> Appointments </u></h2>
      <br/>
      <br/>
        <>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Appointment</th>
            <th>Approval</th>
          </tr>
        </thead>
        {appointments.map((appointment) => (
        <tbody>
          <tr>
            <td><ViewBtn onClick={() => {
              setViewModalShow(true);
              setViewAppointment(appointment);
              }}/>
            </td>
            <td><ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group"></ButtonGroup>
                  <Button variant="success" onClick={() => 
                      {setModalAppr(true); setApprAppointment(appointment);}}>Approve</Button>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="danger"onClick={() => 
                      {setModalDelete(true);setDeleteAppointment(appointment);}}>Deny</Button> 
                </ButtonGroup>
                </ButtonToolbar>
            </td>
          </tr>
        </tbody>
        ))}
      </Table>

      <AppDeleteModal show={modaldelete}
        onHide={() => setModalDelete(false)}
        DeleteAppointment={DeleteAppointment}
        />

      <ApprModal show={modalAppr}
        onHide={() => setModalAppr(false)}
        ApprAppointment={ApprAppointment}
        />

      <ViewModalAdmin 
                show = {viewmodalShow} 
                onHide = {() => setViewModalShow(false)}
                viewappointment = {viewAppointment}
                />

        </>
      <br/>
      <br/>
    </div>
    </div>
  )
}

export default PendingTable
