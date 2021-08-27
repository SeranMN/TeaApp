import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ReportForm = ({det}) => {
     const [validated, setvalidated] = useState(false);
     const [month, setMonth] = useState(det != null ? det.Month : "");
    const [currentrate, setCurrentRate] = useState(det != null ? det.CurrentRate : "");
    
     const handleSubmit = (event) => {
       const form = event.currentTarget;       
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }
       setvalidated(true);
     };
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formmonth">
          <Form.Label>Month</Form.Label>
          <Form.Select
            aria-label="Floating label select example"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          >
            <option value="" selected disabled hidden>
              Select Month
            </option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please Select Month to Generate Monthly Report
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
}

export default ReportForm
