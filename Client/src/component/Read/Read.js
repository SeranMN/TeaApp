import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../UserContext/UserContext';
import { useState, useEffect } from 'react';
//import { Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Read.css';

const Read= (props) => {

    // const [users, setUsers] = useContext(UserContext);
    // const {id} = useParams();
    //const {Vehicles, setVehicles} = useState([]);

    

    // const user = users.filter(user => user.id == id);
    console.log(props.vehicledetails)
    return (
        <div {...props} className="read">
            
            {/* <h1>ID: {'CEB 2030'}</h1>
            <h1>Vehicle Type: {props.vehicledetails.vtype}</h1>
            <h1>Position: {props.vehicledetails.vmodel}</h1>
            <h1>Salary: {props.vehicledetails.ftype}</h1>
            <h1>Owner: {props.vehicledetails.owner}</h1>
            <Link to ="/home1">
                <Button variant ="info">Back to Home</Button>
            </Link> */}

            
        </div>
    )
}

export default Read

