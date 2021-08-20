
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const EmpForm = () => {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>NIC No.</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
      
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default EmpForm


