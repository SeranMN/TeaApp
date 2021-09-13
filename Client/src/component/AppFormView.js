import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ContactUs from './ContactUs'
import { useState } from 'react'
import { FaTrash } from "react-icons/fa";



const AppFormView = ({upd}) => {

    const [validated, setvalidated] = useState(false);
    const [name, setName] = useState(upd != null ? (upd.AppointersName) : (''))
    const [email, setEmail] = useState(upd != null ? (upd.Email) : (''))
    const [position, setPosition] = useState(upd != null ? (upd.OfficersPosition) : (''))
    const [date, setDate] = useState(upd != null ? (upd.Date) : (''))
    const [time, setTime] = useState(upd != null ? (upd.Time) : (''))
    const [concern, setConcern] = useState(upd != null ? (upd.Concern) : (''))

    const onSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        setvalidated(true);
    }
    
    const disablePastDays = () => {
        const today = new Date();
        const dd = String(today.getDate());
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

  return (
    <Form noValidate validated={validated} onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled />
        <Form.Control.Feedback type="invalid">Enter Name</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Email" 
        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled />
        <Form.Control.Feedback type="invalid">Enter Valid Email Address</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPosition">
        <Form.Label>Officer's Position</Form.Label>
        <Form.Select
            aria-label="Floating label select example"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            disabled
        >
            <option>General Manager</option>
            <option value="1">CR Manager</option>
            <option value="2">HR Manager</option>
            <option value="3">Financial Manager</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">Select One</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control 
        type="date" 
        min={disablePastDays()} 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        disabled/>
        <Form.Control.Feedback type="invalid">Select Date</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)} 
        disabled/>
        <Form.Control.Feedback type="invalid">Select Time</Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formConcern">
        <Form.Label>Concern</Form.Label>
        <Form.Control 
        as="textarea" 
        placeholder="type here"
        value={concern}
        onChange={(e) => setConcern(e.target.value)}
        disabled />
        <Form.Control.Feedback type="invalid">Your Concern</Form.Control.Feedback>
    </Form.Group>
    
  <Button variant="primary" type="submit">
  Edit
  </Button>
  <div>
    &nbsp;&nbsp;&nbsp;
    <span>
        <FaTrash
        onClick={() => console.log("Delete")}
        style={{ cursor: "pointer", color: "red" }}
        title="Delete Appointment"
        />
    </span>
  </div>
</Form>
    
  )
}

export default AppFormView
