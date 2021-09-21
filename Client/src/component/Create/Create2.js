import React, { useContext } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
//import { UserContext } from '../UserContext/UserContext';
//import { DeliveryContext} from '../UserContext/DeliveryContext';
import { useState } from 'react';
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
//import { DeliveryContext2 } from '../UserContext/DeliveryContext2';
import axios from 'axios';
//import { UserContext } from '../UserContext/UserContext';


const Create2 = () => {
    //const [users2, setUsers2] = useContext(UserContext);
    const [id1,setId] = useState("");
    const [route,setName] = useState("");
    const [date,setPosition] = useState("");
    const [tea,setSalary] = useState("");
    const [distance,setDistance] = useState("");
    const [driver,setDriver] = useState("");

    const updateId = (e) => {
        setId(e.target.value);
        
    }
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePosition = (e) => {
        setPosition(e.target.value);
    }
    const updateSalary = (e) => {
        setSalary(e.target.value);
    }
    const updateDistance = (e) => {
        setDistance(e.target.value);
    }
    const updateDriver = (e) => {
        setDriver(e.target.value);
    } 
    const addUser= (e) =>{
        e.preventDefault();
        //setUsers2([...users2, {id1:id1, route:route, date:date, tea:tea, distance:distance, driver:driver}])

        const newDelivery = {
            id1:id1,
            route:route,
            date:date,
            tea:tea,
            distance:distance,
            driver:driver
          };

        axios
        .post("http://localhost:5000/Delivery/add", newDelivery )
        .then(() => alert("Delivery Added"))
        .catch((err) => alert(err));
    }

    return (
        <div>
           
            <h1>Add New Delivery </h1>
            <br/>
            <Form onSubmit= {addUser}>
                <FormGroup>
                    <Form.Label>Registration No</Form.Label>
                    <Form.Control
                     type="text"
                    name="did"
                    value={id1}
                    onChange={updateId}
                    placeholder="Enter ID" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Route</Form.Label>
                    <Form.Control
                    type="text"
                    name="route"
                    value={route}
                    onChange={updateName}
                    placeholder="Enter route" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                     type="text"
                    name="date"
                    value={date}
                    onChange={updatePosition}
                    placeholder="Enter date" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Tea Leaves[kg]</Form.Label>
                    <Form.Control 
                    type="text"
                    name="tea"
                    value={tea}
                    onChange={updateSalary}
                    placeholder="Enter Tea Leaves[kg]"
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Distance</Form.Label>
                    <Form.Control
                    type="text"
                    name="distance"
                    value={distance}
                    onChange={updateDistance}
                    placeholder="Enter Distance" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Driver</Form.Label>
                    <Form.Control
                    type="text"
                    name="driver"
                    value={driver}
                    onChange={updateDriver}
                    placeholder="Enter Driver" 
                    />
                </FormGroup>
                <br/>
               
                <Button className="action_btn" variant="primary" type="submit">Add Delivery</Button>
                <Link to="/home2">
                <Button className="action_btn" variant="info">Back to Home </Button>
                </Link>
            </Form>
            <br/><br/>
            
        </div>
    )
}

export default Create2;
