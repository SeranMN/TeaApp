import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import ViewBtn from './ViewBtn';
import ViewModal from './ViewModal';
import { useState } from 'react';
import Table from "react-bootstrap/Table";




const ContactUsView = () => {
  const [viewModalShow, setViewModalShow] = useState(false);

    
  return (
    <Card>
      <Card.Header as="h5">Appointments</Card.Header>
      <Card.Body>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td><ViewBtn onClick={() => setViewModalShow(true)} />
                <ViewModal show = {viewModalShow} onHide = {() => setViewModalShow(false)} /></td>
          </tr>
        </tbody>
      </Table>
  </Card.Body>
</Card>
  )
}

export default ContactUsView
