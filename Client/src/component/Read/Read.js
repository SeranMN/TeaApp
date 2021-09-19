//import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../UserContext/UserContext';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Read.css';

const Read= () => {

    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const user = users.filter(user => user.id == id);
    //console.log(user)
    return (
        <div className="read">
            <h1>ID: {user[0].id}</h1>
            <h1>Name: {user[0].vtype}</h1>
            <h1>Position: {user[0].position}</h1>
            <h1>Salary: {user[0].salary}</h1>
            <h1>Owner: {user[0].owner}</h1>
            <Link to ="/">
                <Button variant ="info">Back to Home</Button>
            </Link>

            
        </div>
    )
}

export default Read
