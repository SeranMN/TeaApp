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


const PendingTable = () => {
    const [viewmodalShow, setViewModalShow] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [viewAppointment, setViewAppointment] = useState('');


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
    <Router>
    <div style={{ marginLeft: "420px", marginTop: "20px", marginRight: "420px"}}>
      <h2><u> Appointments </u></h2>
      <br/>
      <br/>
      <Route path='/' exact render={(props) =>(
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
                <Link to='/ApprTable'>
                  <Button variant="success" >Approve</Button>
                </Link>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="danger">Deny</Button> 
                </ButtonGroup>
                </ButtonToolbar>
            </td>
          </tr>
        </tbody>
        ))}
      </Table>

      <ViewModalAdmin 
                show = {viewmodalShow} 
                onHide = {() => setViewModalShow(false)}
                viewappointment = {viewAppointment}
                />

        </>
        )}/>
        <Route path="/ApprTable" component={ApprTable} />
      <br/>
      <br/>
    </div>
    </Router>
    </div>
  )
}

export default PendingTable
