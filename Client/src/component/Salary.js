import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
const Salary = () => {
  const [validated, setValidated] = useState(false);
  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      
      <Row>
        <Col sm={2}></Col>
        <Col sm={4}>
          <div style={{ margin: "20px" }}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <InputGroup className="mb-2">
                <InputGroup.Text>Employee ID</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text>Month</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" type="Month" />
              </InputGroup>

              <Button variant="primary" type="submit">
                Submit
              </Button>
                      </Form>
                  <br/>
                      
              <Button variant="success" type="submit">
                Generate Report
              </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Salary;
