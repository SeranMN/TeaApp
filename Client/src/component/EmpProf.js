import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2, ImPhone } from "react-icons/im";
import { BsPersonSquare } from "react-icons/bs";

const EmpProf = ({ profile }) => {
    

    const token =JSON.parse(sessionStorage.getItem("token"));

            const[profiledetails, setProfiledetails] = useState([]);
            useEffect(() =>{
            const email = token.email;
                const details = {"email" :email}
                axios.get(`http://localhost:5000/employee/email/${email}`)
                .then((res) =>{
                    console.log(res.data);
                    setProfiledetails(res.data);
                })
                .catch ((err) => {alert(err.msg)})
            }, []);
    console.log(profiledetails)
            
    
    return (
        <div style = {{
                backgroundImage: `url("https://images.pexels.com/photos/3975580/pexels-photo-3975580.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3975580.jpg&fm=jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover" }}>
        <div className="profile" >
           
            <div>
            
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="./Img/userimg.png" />
                <Card.Body>
                    <Card.Title>{profiledetails.name}</Card.Title>
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
                <Card.Body><BsPersonSquare />{" "}{profiledetails.nic}</Card.Body>
            </Card>
            <Card>
                <Card.Body><ImPhone />{" "}{profiledetails.mobno}</Card.Body>
            </Card>
            </div>
            </div>
            
        </div>
    )
}


export default EmpProf
