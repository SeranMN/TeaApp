import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
//import { useState } from 'react'


 
const Sadd = () => {
 
 
 
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Product ID
            </Form.Label>
            
            <Form.Control type="text" placeholder="Product ID" />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Quantity
        </Form.Label>
            <Form.Control type="text" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Date
        </Form.Label>
            <Form.Control type="date"/>
        </Form.Group>
        
 
       
 
        
        
      <Button variant="primary" type="submit">Submit</Button>
</Form>
  )
}
export default Sadd