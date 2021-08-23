import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap"
import { useState } from "react";

const SupplierForm = ({det}) => {
  const [validated, setvalidated] = useState(false)
  const [name, setName] = useState(det != null ? (det.Name) : (''))
  const [home, setHome] = useState(det != null ? (det.Home) : (''))
  const [street, setStreet] = useState(det != null ? (det.Street) : (''))
  const [city, setCity] = useState(det != null ? (det.City) : (''))
  const [nic, setNic] = useState(det != null ? (det.NIC) : (''))
  const [mobile, setMobile] = useState(det != null ? (det.Mobile) : (''))
  const [email, setEmail] = useState(det != null ? (det.Email) : (''))
  const [image, setImage] = useState(det != null ? (det.Image) : (''))
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
    setImage(e.target.value);

  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onchange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Row className="mb-3" controlId="formAddress">
        <Form.Group as={Col} md="3" controlId="FormAddressHome">
          <Form.Label>House Name or Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name or Number"
            value={home}
            onChange={(e) => setHome(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="FormAddressStreet">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="FormAdddressCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formNIC">
        <Form.Label>NIC Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="National ID Number"
          pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
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
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formImage" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          value={image}
          onChange={imageChange}
          required
        />
        {selectedImage && (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              maxWidth: "10%",
              maxHeight: "10%",
            }}
          >
            <img src={URL.createObjectURL(selectedImage)} alt="Profile" />
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        {det != null ? "Save Changes" : "Add"}
      </Button>
    </Form>
  );
  
}

export default SupplierForm
