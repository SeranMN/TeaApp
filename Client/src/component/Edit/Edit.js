import React, { useContext, useState } from 'react'
//import { useParams } from 'react-router';
import {Button} from 'react-bootstrap'
import { Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Edit = ({det}) => {
    console.log(det.vtype)

    const [id,setId] = useState(det.vid);
    const [vtype,setName] = useState(det.vtype);
    const [vmodel,setPosition] = useState(det.vmodel);
    const [ftype,setSalary] = useState(det.ftype);
    const [owner,setOwner] = useState(det.owner); 

    const onupdate = (e) =>{
        const newVehicle = {
            vid:id,
            vtype:vtype,
            vmodel:vmodel,
            ftype: ftype,
            owner: owner,
          };

        axios
        .put(`http://localhost:5000/Vehicle/update/${det._id}`, newVehicle )
        .then(() => alert("Vehicle Updated"))
        .catch((err) => alert(err));
    }
 
    const editName = (e) =>{
        setName(e.target.value);
        /* const edited_name = vtype;
        user[0].vtype = edited_name; */
    }
    const editPosition = (e) =>{
        setPosition(e.target.value);
        /* const edited_position = vmodel;
        user[0].vmodel = edited_position; */
    }
    const editSalary = (e) =>{
        setSalary(e.target.value);
        /* const edited_salary = ftype;
        user[0].ftype = edited_salary; */
    }
   const editOwner = (e) =>{
        setOwner(e.target.value);
        /* const edited_owner = owner;
        user[0].owner = edited_owner; */
    }  
     const editUser = (e) => {
         /* e.preventDefault();
        setUsers([...users]); 
 */
    }; 
    
    //console.log(window.$vehicle)
    return (
        <div className="edit">
            
              <Form  onsubmit ={onupdate}>
                <FormGroup>
                    <Form.Label>
                        <h1>ID NO: {id }</h1>
                    </Form.Label>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control
                    type="text"
                    name="vtype"
                    value={vtype}
                    onChange={editName}
                    //placeholder={user[0].vtype}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Vehicle Modal</Form.Label>
                    <Form.Control
                     type="text"
                    name="vmodel"
                    value={vmodel}
                    onChange={editPosition}
                    //placeholder={user[0].vmodel} 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control 
                    type="text"
                    name="ftype"
                    value={ftype}
                    onChange={editSalary}
                    //placeholder={user[0].ftype}
                    />
                </FormGroup>
               <FormGroup>
                    <Form.Label> Vehicle Owner</Form.Label>
                    <Form.Control 
                    type="text"
                    name="owner"
                    value={owner}
                    onChange={editOwner}
                    //placeholder={user[0].owner}
                    />
                </FormGroup> 
                <br/>
                
                <Button onClick={onupdate} variant="primary" >Edit Vehicle</Button>
                
                <Button className="action_btn" variant="info">Back to Home </Button>
                
            </Form>  
        </div>
    )
}

export default Edit
 