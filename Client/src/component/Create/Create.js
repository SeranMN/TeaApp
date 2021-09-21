import React, { useContext } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
//import { UserContext } from '../UserContext/UserContext';
import { useState } from 'react';
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    //const [users, setUsers] = useContext(UserContext);
    const [vid,setId] = useState("");
    const [vtype,setName] = useState("");
    const [vmodel,setPosition] = useState("");
    const [ftype,setSalary] = useState("");
    const [owner,setOwner] = useState("");

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
    const updateOwner = (e) => {
        setOwner(e.target.value);
    }
    const addUser= (e) =>{
        e.preventDefault();
        // setUsers([...users, {id:id, vtype:vtype, vmodel:vmodel, ftype:ftype, owner:owner}])
        
        const newVehicle = {
            vid:vid,
            vtype:vtype,
            vmodel:vmodel,
            ftype: ftype,
            owner: owner,
          };

        axios
        .post("http://localhost:5000/Vehicle/add", newVehicle )
        .then(() => alert("Vehicle Added"))
        .catch((err) => alert(err));
    }

    return (
        <div>
           
            <h1>Register New Vehicle</h1>
            <br/>
            <Form onSubmit= {addUser}>
                <FormGroup>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                     type="text"
                    name="vid"
                    value={vid}
                    onChange={updateId}
                    placeholder="Enter ID" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                    type="text"
                    name="vtype"
                    value={vtype}
                    onChange={updateName}
                    placeholder="Enter vehicle type" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Vehicle Model</Form.Label>
                    <Form.Control
                     type="text"
                    name="vmodel"
                    value={vmodel}
                    onChange={updatePosition}
                    placeholder="Enter vehicle Model" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control 
                    type="text"
                    name="ftype"
                    value={ftype}
                    onChange={updateSalary}
                    placeholder="Enter Fuel Type"
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label> Vehicle Owner</Form.Label>
                    <Form.Control 
                    type="text"
                    name="owner"
                    value={owner}
                    onChange={updateOwner}
                    placeholder="Enter Owner"
                    />
                </FormGroup>
                <br/>
                
                <Button className="action_btn" variant="primary" type="submit">Register Vehicle</Button>
                <Link to="/home1">
                <Button className="action_btn" variant="info">Back to Home </Button>
                </Link>
            </Form>
            <br/><br/>
            
        </div>
    )
}

export default Create;
