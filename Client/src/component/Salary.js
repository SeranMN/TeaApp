import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EmpSideNavBar from "./EmpSideNavBar";
import axios from "axios";

import { Form, FormControl, InputGroup, Button } from "react-bootstrap";


const Salary = () => {
  const[month,setMonth] = useState()
  const [validated, setValidated] = useState(false);
  const [id, setID] = useState();
  const [details, setDetails] = useState();
  const countD = 0
  const onSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const m = month.slice(5, 8)
       axios
         .get(`http://localhost:5000/attendance/${id}`).then((res) => {
           if (res.data) {
             setDetails(res.data) 
             console.log(details.month)
               console.log(m)
             details.map((detail) => {
               if (detail.month == m ) {
                 countD = countD + 1
                 console.log(countD)
               }
             })
             
              }
            }).catch((err)=> alert(err))
    }


    setValidated(true);
  };
  return (
    <>
      <EmpSideNavBar/>
      <Row>
        <Col sm={2}></Col>
        <Col sm={4}>
          <div style={{ margin: "20px" }}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <InputGroup className="mb-2">
                <InputGroup.Text>Employee ID</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" onChange = {(e)=> setID(e.target.value)} />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text>Month</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" type="Month" onChange = {(e)=> setMonth(e.target.value)} />
              </InputGroup>

              <Button variant="primary" onClick= {onSubmit}>
                Submit
              </Button>
                      </Form>
                  <br/>
                      {console.log(countD)}
              <Button variant="success" type="submit">
                Generate Report
              </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Salary;
