import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Row } from "react-bootstrap";

const RegEmpSupForm = ({det}) => {
    const [validated, setvalidated] = useState(false);
    const [username, setUserName] = useState(det != null ? (det.UserName) : (""));
  const [newpassword, setNewPassword] = useState(det != null ? (det.NewPassword) : (""));
  // const [confirmpassword, setConfirmPassword] = useState(det != null ? (det.ConfirmPassword) : (""));
    
  const handleSubmit = (event) => {
    const form = event.currentTarget;
      var v1 = document.getElementById("formPassword").value;
      var v2 = document.getElementById("formrePassword").value;

      if ((v1 == v2) && v1 != null && v2 != null) {
        alert("Success");
      } else {
        alert("Password Missmatch");
    };
  
      
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setvalidated(true);    
  };

  
  

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Create New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Create Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <Form.Control.Feedback type="valid">Looks Good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formrePassword">
        <Form.Label>Re Enter New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Re Enter Password"
          required
        />
      </Form.Group>

      <fieldset>
        <Row className="mb-3" controlId="selecttype">
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm="20">
              Employee or Supplier :
            </Form.Label>
            <Row md="6" style={{ marginLeft: "30px" }}>
              <Form.Check
                type="radio"
                label="Employee"
                name="radioselect"
                value="1"
                id="radioemplyee"
                required
              />
              <Form.Check
                type="radio"
                label="Supplier"
                name="radioselect"
                value="2"
                id="radiosupplier"
                required
              />
            </Row>
          </Form.Group>
        </Row>
      </fieldset>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default RegEmpSupForm