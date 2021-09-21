//import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../UserContext/UserContext';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Read.css';

const Read2= () => {

    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const user = users.filter(user => user.id == id);
    //console.log(user)
    return (
        <div className="read">
            <h1>ID: {user[0].id}</h1>
            <h1>Route: {user[0].route}</h1>
            <h1>Date: {user[0].date}</h1>
            <h1>Tea Leaves: {user[0].tea}</h1>
            <h1>Distance: {user[0].distance}</h1>
            <h1>Driver: {user[0].driver}</h1>
            <Link to ="/home2">
                <Button variant ="info">Back to Home</Button>
            </Link>

            
        </div>
    )
}

export default Read2
