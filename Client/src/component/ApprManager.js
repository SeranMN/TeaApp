import React from 'react'
import Table from "react-bootstrap/Table";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import SearchBar from './AppSearchBar';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import AppDeleteModal from './AppDeleteModal';
import Sidenavbar from './AppSidenavbar';

const ApprManager = () => {
    const [modaldelete, setModalDelete] = useState(false)
    const [appointments, setAppointment] = useState([
    {
      AppointmentID: "001",
      AppointersName: "Dishan Pahan",
      Email: "dishanp@gmail.com",
      OfficersPosition: "General Manager",
      Date: "08/23/2021",
      Time: "11.30 AM",
      Concern: "To discuss about payments",
    },
    {
      AppointmentID: "002",
      AppointersName: "Navindu Seran",
      Email: "serann@gmail.com",
      OfficersPosition: "CR Manager",
      Date: "09/20/2021",
      Time: "3.30 PM",
      Concern: "To discuss about supplements",
    },
    {
      AppointmentID: "003",
      AppointersName: "Risina Rasmith",
      Email: "rrisina@gmail.com",
      OfficersPosition: "HR Manager",
      Date: "10/19/2021",
      Time: "10.30 AM",
      Concern: "To discuss about payments",
    },
    ]);
    const [AppDelete, setAppDelete] = useState('')

  return (
    
    <div>
      <Sidenavbar/>
      <br/>
      <SearchBar/>
      <br/>
      <br/>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>AppointmentID</th>
            <th>AppointersName</th>
            <th>Email</th>
            <th>OfficersPosition</th>
            <th>Date</th>
            <th>Time</th>
            <th>Concern</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        {appointments.map((appointment) => (
        <tbody key={appointment.AppointmentID}>
          <tr>
            <td>{appointment.AppointmentID}</td>
            <td>{appointment.AppointersName}</td>
            <td>{appointment.Email}</td>
            <td>{appointment.OfficersPosition}</td>
            <td>{appointment.Date}</td>
            <td>{appointment.Time}</td>
            <td>{appointment.Concern}</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => {setModalDelete(true);setAppDelete(appointment.AppointmentID)}}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Record"
                  />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
        ))}
      </Table>
      <AppDeleteModal show={modaldelete}
        onHide={() => setModalDelete(false)}
        AppDelete={AppDelete}/>

      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default ApprManager
