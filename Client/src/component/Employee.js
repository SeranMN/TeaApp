import React from "react";
import Empbtn from "./Empbtn";
import { useState } from "react";
import Modle from "./Modle";

import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import EmployeeDetails from "./EmployeeDetails";
import Sidenavbar from "./Sidenavbar"
import Offcanvas from "react-bootstrap/Offcanvas";
const Employee = () => {
  const [modalShow, setModalShow] = useState(false);
  const [totEmp, setTot] = useState(1);

  
  return (
    <div style={{ marginLeft: "220px",marginTop:'20px',marginRight:'50px' }}>
     
     <Row>
        
        
  
      <div style={{ margin: "20px" }}>
      <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title> Total Employees </Card.Title>
                <Card.Text>
                  <h2>{totEmp}</h2>4
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title> Today Attendance </Card.Title>
                <Card.Text>
                  <h2>35</h2>4
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </div>

    
        
        <div style={{ margin: "20px" }}>
        
          <Empbtn onClick={() => setModalShow(true) } />
        
        </div>
        <br />
        <Modle show={modalShow} onHide={() => setModalShow(false) } type = {"ADD"} />

        <EmployeeDetails tot={setTot} />
       
       </Row>
       
    </div>
  );
};

export default Employee;
