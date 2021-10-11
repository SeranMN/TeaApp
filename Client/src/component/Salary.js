import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EmpSideNavBar from "./EmpSideNavBar";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { Form, FormControl, InputGroup, Button } from "react-bootstrap";


const Salary = () => {
  const[days,setDays] = useState('')
  const [validated, setValidated] = useState(false);
  const [id, setID] = useState();
  const [details, setDetails] = useState([]);
  const [OT, setOT] = useState(0)
  const [salary, setSalary] = useState(0)
  
  
  const onSubmit = (event) => {
    axios
      .get(`http://localhost:5000/employee/id/${id}`)
      .then((res) => {
        if (res.data) {
          setDetails(res.data.name)
        }
      })
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if ((days<=25 & days>23)) {
        setSalary(25 * 1000)
         setOT(0)
      } else if ( 30> days & days > 25) {
        setSalary(25 * 1000)
       setOT(600*(days-25))
        
      } else if (days<23) {
        setSalary(days*900)

         setOT(0)
      }
    }
       
    setValidated(true);
    console.log(details)
  };
  return (
    <>
      <EmpSideNavBar/>
    
    
               <div style={{display : "flex", marginLeft: "220px"}}>
      
   
          <div style={{ margin: "20px" }}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <InputGroup className="mb-2">
                <InputGroup.Text>Employee ID</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" onChange = {(e)=> setID(e.target.value)} />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text>Worked Date</InputGroup.Text>
                <FormControl required id="inlineFormInputGroup" type="number" onChange = {(e)=> setDays(e.target.value)} />
              </InputGroup>

              <Button variant="primary" onClick= {onSubmit}>
                Submit
              </Button>
                      </Form>
            <br />
            <Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item style={{fontSize:"25px"}} >{details}</ListGroup.Item>
                <ListGroup.Item>Basic Salary: {salary}</ListGroup.Item>
                <ListGroup.Item>OT: {OT}</ListGroup.Item>
    <ListGroup.Item>Total: {salary+OT }</ListGroup.Item>
  </ListGroup>
</Card>
             <h2></h2>
            <h2></h2>
            <h2></h2>
            <h2></h2>
          </div>
       
      </div>
      </>
  );
};

export default Salary;
