import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2, ImPhone } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";

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
            
    
    return (
        <div className="profile"> 
           
            <div>
            
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="./Img/userimg.png" />
                <Card.Body>
                    <Card.Title>{profiledetails.firstName}{" "}{profiledetails.lastName}</Card.Title>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body><FaEnvelope />{" "}{profiledetails.email}</Card.Body>
            </Card>
            <Card>
                <Card.Body><ImLocation2 />{" "}{profiledetails.address}</Card.Body>
            </Card>
            <Card>
                <Card.Body><BsPersonSquare />{" "}{profiledetails.NIC}</Card.Body>
            </Card>
            <Card>
                <Card.Body><ImPhone />{" "}{profiledetails.contactNo}</Card.Body>
            </Card>
            </div>
            
        </div>
    )
}


export default Profile
