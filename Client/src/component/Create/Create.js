import React, { useContext } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import { useState } from 'react';
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [salary,setSalary] = useState("");
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
        setUsers([...users, {id:id, name:name, position:position, salary:salary, owner:owner}])
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
                    name="id"
                    value={id}
                    onChange={updateId}
                    placeholder="Enter ID" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName}
                    placeholder="Enter Name" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                     type="text"
                    name="position"
                    value={position}
                    onChange={updatePosition}
                    placeholder="Enter Position" 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control 
                    type="text"
                    name="salary"
                    value={salary}
                    onChange={updateSalary}
                    placeholder="Enter Salary"
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Owner</Form.Label>
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
