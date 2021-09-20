import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'
import { useState } from 'react'
import axios from "axios";

const Feedbackform = ({det}) => {
    const [validated, setvalidated] = useState(false)
    const [pid, setProductID] = useState();
    const [email, setEmail] = useState();
    const [type, setFeedbackType] = useState();
    const [description, setDescription] = useState();
    const [rating, setRating] = useState();


    const handleSubmit = (event) => {
        const newFeedback = {
            "productID" : pid,
            "email" : email,
            "feedbackType" : type,
            "description" : description,
            //rating : rating,
        };

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
            axios
                .post("http://localhost:5000/feedback/add", newFeedback)
                .then(() => alert("Feedback Successfully Submitted"))
                .catch((err) => alert(err));
        }
        setvalidated(true);
      };


    return (
        <div className="feedbackform">

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="pid">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
                 placeholder="Product ID" 
                 value={pid}
                 onChange={(e) => setProductID(e.target.value)}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
                 type="email" 
                 pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
            />
        </Form.Group>

        <Form.Label>Feedback Type</Form.Label>
        <Form.Select aria-label="Feedback Type" value={type} onChange={(e) => setFeedbackType(e.target.value)}>
            <option selected disabled hidden>Feedback Type</option>
            <option>Happy</option>
            <option>Normal</option>
            <option>Bad</option>

        </Form.Select>
        <br />
        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
                 as= "textarea"
                 value={description} 
                 onChange={(e) => setDescription(e.target.value)}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Rating />
            
        </Form.Group>
        

        <Button variant="primary" type="submit">Submit</Button>
        <br />
        </Form>
        </div>
    )
}

export default Feedbackform
