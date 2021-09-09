import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ReportForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [month, setMonth] = useState(det != null ? det.Month : "");
  const [currentrate, setCurrentRate] = useState(
    det != null ? det.CurrentRate : ""
  );

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setvalidated(true);
  };

  const disableFutureMonths = () => {
    const date = new Date();
    const mmf = String(date.getMonth()).padStart(2, "0"); //January is 0!
    const yyyyf = date.getFullYear();
    return yyyyf + "-" + mmf;
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formmonth">
        <Form.Label>Month</Form.Label>
        <Form.Control
          type="month"
          max={disableFutureMonths()}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please Select Month to Generate Monthly Invoice
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formrate">
        <Form.Label>Current Rate</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="Enter Current Price of Tea Leaves"
          pattern="[0-9]"
          value={currentrate}
          onChange={(e) => setCurrentRate(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Current Rate of Tea Leaves
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="success" type="submit">
        Generate
      </Button>
    </Form>
  );
};

export default ReportForm;
