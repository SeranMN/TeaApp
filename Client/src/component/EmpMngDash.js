import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Col, Row, Table } from "react-bootstrap";
import empIcon from "../Img/empMng.png"
import salaryIcon from "../Img/money.png"
import attIcon from "../Img/attendance.png"
const empMngDash = () => {
  return (
    <div>
      <div>
        <Container>
          <Row md={1} md={4} className="g-4">
            <Col>
              <Card
                bg="success"
                text="light"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Card.Img variant="top" src={empIcon} />
                <Card.Body>
                  <Card.Title>Employee Details</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="success"
                text="light"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Card.Img variant="top" src={salaryIcon} />
                <Card.Body>
                  <Card.Title>Salary </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                bg="success"
                text="light"
                style={{ width: "18rem", height: "25rem" }}
              >
                <Card.Img variant="top" src={attIcon} />
                <Card.Body>
                  <Card.Title>Attendance</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default empMngDash;
