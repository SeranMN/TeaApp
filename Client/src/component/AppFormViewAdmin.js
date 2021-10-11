import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ContactUs from './ContactUs'
import { useState } from 'react'
import Sidenavbar from './AppSidenavbar'

const AppFormViewAdmin = ({view}) => {
    const [validated, setvalidated] = useState(false);
    const [name, setName] = useState(view.name)
    const [email, setEmail] = useState(view.email)
    const [position, setPosition] = useState(view.position)
    const [date, setDate] = useState(view.date)
    const [time, setTime] = useState(view.time)
    const [concern, setConcern] = useState(view.concern)
    
    const disablePastDays = () => {
        const today = new Date();
        const dd = String(today.getDate());
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

  return (
      
    <Form noValidate validated={validated}>
    <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled />
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
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPosition">
        <Form.Label>Officer's Position</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Name" 
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        disabled />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control 
        type="date" 
        min={disablePastDays()} 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        disabled/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)} 
        disabled/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formConcern">
        <Form.Label>Concern</Form.Label>
        <Form.Control 
        as="textarea" 
        placeholder="type here"
        value={concern}
        onChange={(e) => setConcern(e.target.value)}
        disabled />
    </Form.Group>
</Form>
  )
}

export default AppFormViewAdmin
