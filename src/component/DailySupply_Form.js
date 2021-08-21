import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const DailySupplyForm = () => {
  const [validated, setvalidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setvalidated(true);
    };
    
    const disablePastDays = () => {
        const today = new Date();
        const dd = String(today.getDate() - 7).padStart(2,"0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    const disableFutureDays = () => {
      const date = new Date();
      const ddf = String(date.getDate()).padStart(2, "0");
      const mmf = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyyf = date.getFullYear();
      return yyyyf + "-" + mmf + "-" + ddf;
    };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formSupID">
        <Form.Label>Supplier ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Supplier ID" required />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Supplier ID
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" min={disablePastDays()} max={disableFutureDays()} required />
        <Form.Control.Feedback type="invalid">
          Please insert Delivery Date
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formWeight">
        <Form.Label>Weight (kg)</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="Enter Weight in Kilograms"
          pattern="[0-9]"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Weight of Tea Leaves
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formVehicle">
        <Form.Label>Delivered Vehicle</Form.Label>
        <Form.Select
          placeholder="Select Vehicle Number"
          aria-label="Floating label select example"
          required
        >
          <option value="" selected disabled hidden>
            Select Vehicle
          </option>
          <option value="1">LY-3654</option>
          <option value="2">LA-8546</option>
          <option value="3">LG-2284</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please Select Delivery Vehicle Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDataEntryO">
        <Form.Label>Data Entry Officer ID</Form.Label>
        <Form.Select
          aria-label="Floating label select example"
          required
        >
          <option value="" selected disabled hidden>
            Select Your Employee ID
          </option>
          <option value="1">DE001</option>
          <option value="2">DE002</option>
          <option value="3">DE003</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select Your Employee ID
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default DailySupplyForm;