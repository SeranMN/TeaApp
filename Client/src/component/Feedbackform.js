import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Rating from './Rating'
import { useState } from 'react'

const Feedbackform = ({det}) => {
    const [validated, setvalidated] = useState(false)
    const [pid, setProductID] = useState();
    const [email, setEmail] = useState();
    const [type, setFeedbackType] = useState();
    const [description, setDescription] = useState();
    const [rating, setRating] = useState();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
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
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
                 type="email" 
                 pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" 
                 value={email}
                 required
            />
        </Form.Group>

        <Form.Label>Feedback Type</Form.Label>
        <Form.Select aria-label="Feedback Type">
            <option selected disabled hidden>Feedback Type</option>
            <option value="1">Happy</option>
            <option value="2">Normal</option>
            <option value="3">Bad</option>
        </Form.Select>
        <br />
        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
                 as= "textarea"
                 value={description} 
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
