import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import Clock from "./Clock";

const Attendance = () => {
  return (
    <>
      <div style={{ margin: "2px" }}>
        <Row>
          <Col md={2}></Col>
          <Col>
            <Clock /> <br />
          </Col>
              </Row>
              <Row>
                  <Col md = {2}> </Col>
        <Col md = {4} >
                      <Button> Mark Attendance</Button>
                      
                  </Col>{" "}
               
              </Row>
              <Row>
              <Col md = {2}></Col>
                  <Col xs ={10}>
                       <br />  
        <Table striped bordered hover size="sm">
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
        </Col>
        </Row>
      </div>
    </>
  );
};

export default Attendance;
