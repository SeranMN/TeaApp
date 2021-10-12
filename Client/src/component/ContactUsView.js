import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import ViewBtn from './AppViewBtn';
import ViewModal from './AppViewModal';
import { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from 'axios';
import AppBtnModal from './AppBtnModal'
import AppDeleteModal from './AppDeleteModal';
import Header from './Header';
import Footer from './Footer';


const ContactUsView = ({AppointmentID, appointment, onClick}) => {
  const [viewModalShow, setViewModalShow] = useState(false);
  const [ModalDelete, setModalDelete] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [updAppointment, setUpdAppointment] = useState('');
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
      <Header/>

    <section className='conctview'>
    <div className='conctus-overlay'>

    <Card text="dark" style={{marginTop: "220px", marginRight: "70px", width:"1150px", height:"450px", backgroundColor:"rgba(0, 0, 0, 0.4)", border:"solid", display: "flex", flexDirection: "column"}}>
      <Card.Header as="h5" style={{color: "white", fontSize:"25px"}}>Appointments</Card.Header>
      <Card.Body>
      <Table striped bordered hover size="sm">
        <thead>
          <tr style={{fontSize:"20px"}}>
            <th>AppointmentID</th>
            <th>Name</th>
            <th>Officer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Concern</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {appointments.map((appointment) => (
        <tbody key={appointment._id}>
          <tr style={{color: "white"}}>
            <td>{appointment._id}</td>
            <td>{appointment.name}</td>
            <td>{appointment.position}</td>
            <td>{appointment.date}</td>
            <td>{appointment.time}</td>
            <td>{appointment.concern}</td>
            <td>
            <div>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaEdit
                    onClick={() => {
                      setViewModalShow(true);
                      setUpdAppointment(appointment)}}
                    style={{ cursor: "pointer", color: "green" }}
                    title="Edit Record"
                  />
                </span>
              </div>
            </td>
            <td>
              <div>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => 
                      {setModalDelete(true);
                        setDeleteAppointment(appointment);}}
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
      <AppBtnModal
        show={viewModalShow}
        onHide={() => setViewModalShow(false)}
        updAppointment = {updAppointment}
      />
      <AppDeleteModal
        show={ModalDelete}
        onHide={() => setModalDelete(false)}
        DeleteAppointment = {DeleteAppointment}
      />
  </Card.Body>
</Card>
</div>
</section>
<Footer/>
    </div>
  )
}

export default ContactUsView
