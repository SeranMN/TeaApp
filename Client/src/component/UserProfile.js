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
                    <Card.Title>{profiledetails.firstName}</Card.Title>
                </Card.Body>
            </Card>
            <br /><br />
            <Card>
                <Card.Body>lasalt@gmail.com</Card.Body>
            </Card>
            <Card>
                <Card.Body>No.32, Samanala Mawatha, Thihagoda, Matara.</Card.Body>
            </Card>
            <Card>
                <Card.Body>982746890V</Card.Body>
            </Card>
            <Card>
                <Card.Body>0712345689</Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Profile
