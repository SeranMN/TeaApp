import React, { useContext } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import { useState } from 'react';
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Create2 = () => {
    const [users, setUsers] = useContext(UserContext);
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [position,setPosition] = useState("");
    const [salary,setSalary] = useState("");

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
    const addUser= (e) =>{
        e.preventDefault();
        setUsers([...users, {id:id, name:name, position:position, salary:salary}])
    }

    return (
        <div>
           
            <h1>Add New Delivery </h1>
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
                <br/>
                <Link to="/home2">
                <Button className="action_btn" variant="primary" type="submit">Add Delivery</Button>
                
                <Button className="action_btn" variant="info">Back to Home </Button>
                </Link>
            </Form>
            <br/><br/>
            
        </div>
    )
}

export default Create2;
