import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Cusedit = ({det}) => {
    return (
        <div className="editform">
        <Form>
        <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                 type="email" 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactno">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nic">
            <Form.Label>NIC</Form.Label>
            <Form.Control
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
                 as= "textarea" 
            />
        </Form.Group>

        <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload a Photo</Form.Label>
            <Form.Control
                 type="file" 
            />
        </Form.Group>



        <Button variant="primary" type="submit">Save Changes</Button>

        </Form>
        </div>
 
        
    )
}

export default Cusedit