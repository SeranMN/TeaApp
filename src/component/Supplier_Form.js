import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const SupplierForm = () => {
  const [validated, setvalidated] = useState(false)
  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setvalidated(true);
  };

  
  

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" required />
      </Form.Group>

      <Row className="mb-3" controlId="formAddress">
        <Form.Group as={Col} md="4" controlId="FormAddressHome">
          <Form.Label>House Name or Number</Form.Label>
          <Form.Control type="text" placeholder="Name or Number" />
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="FormAddressStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="Street" required />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="FormAdddressCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formNIC">
        <Form.Label>NIC Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="National ID Number"
          pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid NIC Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Moblie Number"
          title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Create Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={imageChange}
          required
        />
        {selectedImage && (
          <div style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            maxWidth: "10%",
            maxHeight: "10%",
          }}>
            <img src={URL.createObjectURL(selectedImage)} alt="Profile" />
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  
}

export default SupplierForm
