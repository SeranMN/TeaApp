import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidenavbar from "./CusSidenavbar";
import { CSVLink } from 'react-csv';

const FeedbackAdmin = ({}) => {
  const [feedbacks, setFeedback] = useState([]);

  const headers = [
    { label: 'Product ID', key: 'productID' },
    { label: 'Email', key: 'Email' },
    { label: 'Feedback Type', key: 'feedbackType' },
    { label: 'Description', key: 'description' },
    { label: 'Rating', key: 'rating' }
  ];

  const csvReport = {
    filename: 'Tea_Factory.csv',
    header : headers,
    data : feedbacks
  };

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
  },[]);


  return (
    <div>
      <Sidenavbar />
    <div style={{ marginLeft: "220px", marginRight: "10px" }}>
      <br />
      <h3>Feedbacks</h3>
      <div className="report" style={{ marginLeft: "850px"}}>
        
          <CSVLink {...csvReport}> 
            <Button variant="outline-primary"> Generate Report </Button>
          </CSVLink>
          
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
            <th>Rating</th>
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
              <td>{feedback.rating}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    </div>
  
  );
};

export default FeedbackAdmin;
