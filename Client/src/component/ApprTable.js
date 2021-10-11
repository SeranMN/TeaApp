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



const ApprTable = () => {
  const [modaldelete, setModalDelete] = useState(false)
  const [appointments, setAppointments] = useState([]);
  const [DeleteAppointment, setDeleteAppointment] = useState('');

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
    <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

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
            <th>Officer's Position</th>
            <th>Date</th>
            <th>Time</th>
            <th>Concern</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        {appointments.map((appointment) => (
        <tbody key={appointment._id}>
          <tr>
            <td>{appointment._id}</td>
            <td>{appointment.name}</td>
            <td>{appointment.email}</td>
            <td>{appointment.position}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.concern}</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => {setModalDelete(true);setDeleteAppointment(appointment);}}
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
        DeleteAppointment={DeleteAppointment}/>

      <br/>
      <br/>
      <div className="RepGe">
        <InputGroup className="mb-3">
        <Form.Select
                aria-label="Floating label select example"
                required>
                  
                <option>General Manager</option>
                <option value="1">CR Manager</option>
                <option value="2">HR Manager</option>
                <option value="3">Financial Manager</option>
            </Form.Select>
        <Button variant="outline-secondary" id="button-addon2">
          Generate Report
        </Button>
        </InputGroup>
      </div>
      <br/>
      <br/>
    </div>
    </div>
  )
}

export default ApprTable
