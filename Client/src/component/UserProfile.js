import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

import { useState } from 'react';


const Profile = ({profile}) => {

    const token =JSON.parse(sessionStorage.getItem("token"));

            const[profiledetails, setProfiledetails] = useState([]);
            useEffect(() =>{
            const email = token.email;
                const details = {"email" :email}
                axios.post("http://localhost:5000/customer/user",details)
                .then((res) =>{
                    console.log(res.data.data);
                    setProfiledetails(res.data.data);
                })
                .catch ((err) => {alert(err.msg)})
            },[]);
            console.log(profiledetails.firstName);
    
    return (
        <div className="profile"> 
           
            <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="./Img/userimg.png" />
                <Card.Body>
                    <Card.Title>{profiledetails.firstName}{" "}{profiledetails.lastName}</Card.Title>
                </Card.Body>
            </Card>
            <br /><br />
            <Card>
                <Card.Body>{profiledetails.email}</Card.Body>
            </Card>
            <Card>
                <Card.Body>{profiledetails.address}</Card.Body>
            </Card>
            <Card>
                <Card.Body>{profiledetails.NIC}</Card.Body>
            </Card>
            <Card>
                <Card.Body>{profiledetails.contactNo}</Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Profile
