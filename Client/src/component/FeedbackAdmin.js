import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidenavbar from "./CusSidenavbar";

const FeedbackAdmin = ({}) => {
  const [feedbacks, setFeedback] = useState([]);

  useEffect(() => {
    const getFeedback = () => {
      axios
        .get("http://localhost:5000/feedback")
        .then((res) => {
          setFeedback(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getFeedback();
  });

  return (
    
    <div style={{ marginLeft: "220px", marginRight: "10px" }}>
      <Sidenavbar />
      <br />
      <h3>Feedbacks</h3>
      <br />
      <div className="report" style={{ marginLeft: "400px" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Product ID"
            aria-label=""
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-primary" id="button-addon2">
            Generate Report
          </Button>
        </InputGroup>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Feedback ID</th> */}
            <th>Product ID</th>
            <th>Email</th>
            <th>Feedback Type</th>
            <th>Description</th>
            {/* <th>Rating</th> */}
          </tr>
        </thead>

        {feedbacks.map((feedback) => (
          <tbody key={feedback._id}>
            <tr>
              {/* <td>{feedback.feedbackID}</td> */}
              <td>{feedback.productID}</td>
              <td>{feedback.email}</td>
              <td>{feedback.feedbackType}</td>
              <td>{feedback.description}</td>
              {/* <td>{feedback.rating/td> */}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  
  );
};

export default FeedbackAdmin;
