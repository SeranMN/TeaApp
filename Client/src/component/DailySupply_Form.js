import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const DailySupplyForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [supID, setSupID] = useState(det != null ? det.supID : "");
  const [date, setDate] = useState(det != null ? det.date : (""));
  const [weight, setWeight] = useState(det != null ? det.weight : (""));
  const [vehicle, setVehicle] = useState(det != null ? det.vehicle : (""));
  const [deo, setDEO] = useState(det != null ? det.deo : (""));

  const handleSubmit = (event) => {
    const newSupply = {
      supID: supID,
      date: date,
      weight: weight,
      vehicle: vehicle,
      deo: deo,
    };
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (det == null) {
        axios
          .post("http://localhost:5000/dailysupply/add", newSupply)
          .then(() => alert("Supply Added"))
          .catch((err) => alert(err));
      } else {
        axios
          .put(`http://localhost:5000/dailysupply/update/${det._id}`, newSupply)
          .then(() => alert("Supply Updated"))
          .catch((err) => alert(err));
      }
    }
    setvalidated(true);
  };

  const disablePastDays = () => {
    const today = new Date();
    const dd = String(today.getDate() - 7).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

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
        <Form.Control
          type="text"
          placeholder="Enter Supplier ID"
          value={supID}
          onChange={(e) => setSupID(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Supplier ID
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          min={disablePastDays()}
          max={disableFutureDays()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Suppliying Date
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formWeight">
        <Form.Label>Weight (kg)</Form.Label>
        <Form.Control
          type="number"
          min="0"
          placeholder="Enter Weight in Kilograms"
          pattern="[0-9]"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Weight of Tea Leaves
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formVehicle">
        <Form.Label>Delivered Vehicle</Form.Label>
        <Form.Select
          aria-label="Floating label select example"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        >
          <option value="" selected disabled hidden>
            Select Vehicle
          </option>
          <option >LY-3654</option>
          <option >LA-8546</option>
          <option >LG-2284</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please Select Delivery Vehicle Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formDataEntryO">
        <Form.Label>Data Entry Officer ID</Form.Label>
        <Form.Select
          aria-label="Floating label select example"
          value={deo}
          onChange={(e) => setDEO(e.target.value)}
          required
        >
          <option value="" selected disabled hidden>
            Select Your Employee ID
          </option>
          <option >DE001</option>
          <option >DE002</option>
          <option >DE003</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select Your Employee ID
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        {det != null ? "Save Changes" : "Add"}
      </Button>
    </Form>
  );
};

export default DailySupplyForm;
