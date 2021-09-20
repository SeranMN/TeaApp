import React from 'react'
//import DatePicker from 'react-datepicker'
//import 'react-datepicker/dist/react-datepicker.css'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//import ContactUs from './ContactUs'
import { useState } from 'react'
import axios from "axios";
import bcrypt from 'bcryptjs';




const AppForm = ({ upd }) => {

    const [validated, setvalidated] = useState(false);
    const [name, setName] = useState(upd != null ? (upd.name) : (''));
    const [email, setEmail] = useState(upd != null ? (upd.email) : (''));
    const [position, setPosition] = useState(upd != null ? (upd.position) : (''));
    const [date, setDate] = useState(upd != null ? (upd.date) : (''));
    const [time, setTime] = useState(upd != null ? (upd.time) : (''));
    const [concern, setConcern] = useState(upd != null ? (upd.concern) : (''));


const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const onSubmit = (event) => {
    const newAppointment = {
        "name": name,
        "email":email,
        "position": position,
        "date": date,
        "time": time,
        "concern": concern,
      };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
        if (upd == null) {
          axios
            .post("http://localhost:5000/appointment/add", newAppointment)
            .then(() => alert("You have an Appointment"))
            .catch((err) => alert(err));
            console.log(newAppointment);
        } else {
          axios
            .put(`http://localhost:5000/appointment/update/${upd._id}`, newAppointment)
            .then(() => alert("Appointment is Updated"))
            .catch((err) => alert(err));
        }
      }
      setvalidated(true);
};
  
  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required />
            <Form.Control.Feedback type="invalid">Enter Name</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" 
            placeholder="Email" 
            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid">Enter Valid Email Address</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Officer's Position</Form.Label>
            <Form.Select
                aria-label="Floating label select example"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
            >
                <option value="" selected disabled hidden>Post</option>
                <option>CR Manager</option>
                <option>HR Manager</option>
                <option>Financial Manager</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Select One</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"  
            min={disablePastDays()}
            value={date}
            onChange={(e) => setDate(e.target.value)} 
            required/>
            <Form.Control.Feedback type="invalid">Select Date</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}  
            required/>
            <Form.Control.Feedback type="invalid">Select Time</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConcern">
            <Form.Label>Concern</Form.Label>
            <Form.Control type="text"
            placeholder="type here" 
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            required />
            <Form.Control.Feedback type="invalid">Your Concern</Form.Control.Feedback>
        </Form.Group>
        
      <Button variant="primary" type="submit">
      {upd != null ? "Done" : "Add"}
      </Button>
</Form>
  );
};

export default AppForm