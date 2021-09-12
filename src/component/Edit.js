import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//import { useState } from 'react'


 
const Edit = () => {
 
 
 
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Name
            </Form.Label>
            
            <Form.Control type="text" placeholder="Name" />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Weight
        </Form.Label>
            <Form.Control type="text" placeholder="Weight" />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Price
        </Form.Label>
            <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Edit a image</Form.Label>
        <Form.Control type="file" />
        </Form.Group>
 
       
 
        
        
      <Button variant="primary" type="submit">Save Changes</Button>
</Form>
  )
}
 
export default Edit