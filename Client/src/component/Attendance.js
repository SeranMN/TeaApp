import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import Clock from "./Clock";
import { Link } from "react-router-dom";
const Attendance = () => {
  return (
    <>
      <div style={{ marginLeft: "220px",marginTop:'20px',marginRight:'20px' }}>
       
            <Clock /> <br />
                     <Link to = "AttendanceMark.js"> <Button> Mark Attendance</Button> </Link>
                     <br/>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
       
      </div>
    </>
  );
};

export default Attendance;
