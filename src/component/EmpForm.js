import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
const EmpForm = ({ det }) => {
  const [nic, setNic] = useState(det != null ? det.nic : "");
  const [name, setName] = useState(det != null ? det.Name : "");
  const [address, setAddress] = useState(det != null ? det.Address : "");
  const [email, setEmail] = useState(det != null ? det.Email : "");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NIC No.</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter NIC"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid NIC.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please provide Name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          required
          type="text field"
          placeholder="Enter email"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please provide Address.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EmpForm;
