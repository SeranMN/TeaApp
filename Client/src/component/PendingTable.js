import React from 'react'
import ViewBtn from './ViewBtn';
import { Button } from 'react-bootstrap'
import Table from "react-bootstrap/Table";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { useState } from 'react';
import ViewModalAdmin from './ViewModalAdmin';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ApprTable from './ApprTable';


const PendingTable = () => {
    const [modalShow, setModalShow] = useState(false);

  return (
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
        <tbody>
          <tr>
            <td><ViewBtn onClick={() => setModalShow(true)} />
                <ViewModalAdmin show = {modalShow} onHide = {() => setModalShow(false)} /></td>
            <td><ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group"></ButtonGroup>
                <Link to='/ApprTable'>
                  <Button variant="success">Approve</Button>
                </Link>
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="danger">Deny</Button> 
                </ButtonGroup>
                </ButtonToolbar>
            </td>
          </tr>
        </tbody>
      </Table>

        </>
        )}/>
        <Route path="/ApprTable" component={ApprTable} />
      <br/>
      <br/>
    </div>
    </Router>
  )
}

export default PendingTable
