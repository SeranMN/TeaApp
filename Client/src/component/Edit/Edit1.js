import React, { useContext, useState } from 'react'
//import { useParams } from 'react-router';
import {Button} from 'react-bootstrap'
import { Form, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Edit1 = ({det}) => {
    console.log(det.vtype)

    const [id1,setId] = useState(det.id1);
    const [route,setName] = useState(det.route);
    const [date,setPosition] = useState(det.date);
    const [tea,setSalary] = useState(det.tea);
    const [distance,setOwner] = useState(det.distance);
    const [driver,setDriver] = useState(det.driver); 

    const onupdate = (e) =>{
        const newDelivery = {
            id1:id1,
            route:route,
            date:date,
            tea: tea,
            distance: distance,
            driver:driver,
          };

        axios
        .put(`http://localhost:5000/Delivery/update/${det._id}`, newDelivery )
        .then(() => alert("Delivery Updated"))
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

    const editDriver = (e) =>{
        setDriver(e.target.value);
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
                        <h1>ID NO: {id1}</h1>
                    </Form.Label>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Route</Form.Label>
                    <Form.Control
                    type="text"
                    name="route"
                    value={route}
                    onChange={editName}
                    //placeholder={user[0].vtype}
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Delivery Date</Form.Label>
                    <Form.Control
                     type="text"
                    name="date"
                    value={date}
                    onChange={editPosition}
                    //placeholder={user[0].vmodel} 
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Tea leaves</Form.Label>
                    <Form.Control 
                    type="text"
                    name="tea"
                    value={tea}
                    onChange={editSalary}
                    //placeholder={user[0].ftype}
                    />
                </FormGroup>
               <FormGroup>
                    <Form.Label> Distance</Form.Label>
                    <Form.Control 
                    type="text"
                    name="distance"
                    value={distance}
                    onChange={editOwner}
                    //placeholder={user[0].owner}
                    />
                </FormGroup> 

                <FormGroup>
                    <Form.Label> Driver Name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="driver"
                    value={driver}
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

export default Edit1
 