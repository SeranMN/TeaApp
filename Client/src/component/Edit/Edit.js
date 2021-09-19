import React, { useContext, useState } from 'react'
import { useParams } from 'react-router';
import { UserContext } from '../UserContext/UserContext';
import {Button} from 'react-bootstrap'
import { Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Edit = () => {
    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();
    const user = users.filter(user => user.id == id);

    
    const [name,setName] = useState(user[0].name);
    const [position,setPosition] = useState(user[0].position);
    const [salary,setSalary] = useState(user[0].salary);
    const [owner,setOwner] = useState(user[0].owner);

    const editName = (e) =>{
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
    }
    const editPosition = (e) =>{
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
    }
    const editSalary = (e) =>{
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
    }
   const editOwner = (e) =>{
        setOwner(e.target.value);
        const edited_owner = owner;
        user[0].owner = edited_owner;
    } 
    const editUser = (e) => {
        e.preventDefault();
        setUsers([...users]);
    };
    
    return (
        <div className="edit">
            
            <Form >
                <FormGroup>
                    <Form.Label>
                        <h1>ID NO: {user[0].id }</h1>
                    </Form.Label>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={editName}
                    placeholder={user[0].name}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                     type="text"
                    name="position"
                    value={position}
                    onChange={editPosition}
                    placeholder={user[0].position} 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control 
                    type="text"
                    name="salary"
                    value={salary}
                    onChange={editSalary}
                    placeholder={user[0].salary}
                    />
                </FormGroup>
               <FormGroup>
                    <Form.Label>Owner</Form.Label>
                    <Form.Control 
                    type="text"
                    name="owner"
                    value={owner}
                    onChange={editOwner}
                    placeholder={user[0].owner}
                    />
                </FormGroup> 
                <br/>
                <Link to="/home1">
                <Button onSubmit={() =>editUser} variant="primary" type="submit">Edit Vehicle</Button>
                
                <Button className="action_btn" variant="info">Back to Home </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Edit
 