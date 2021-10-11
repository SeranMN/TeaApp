import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Modalnew from './CusModalnew.js';
import Profile from './UserProfile.js';
import ModalFeedback from './ModalFeedback.js'
import Modalpassword from './CusModalpassword.js'
import Modaldelete from './CusModaldelete.js';
import axios from 'axios';
import Header from './Header.js';
import { useHistory } from 'react-router-dom';

 

const CusProfile = () => {
   const  history = useHistory()
    
        const[modleType,setModaltype] = useState("")
            const [modalShow, setModalShow] = React.useState(false);
            const [modalFeedback, setModalFeedback] = React.useState(false);
            const [modalPassword, setModalPassword] = React.useState(false);
            const [modalDelete, setModalDelete] = React.useState(false);

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
            console.log(profiledetails);
            return (
                <div>
                    <Header/>
                 <h3>User Profile</h3>
                <Profile profile = {profiledetails.data} />

                <br/><br />
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Update Details
                </Button>
                &nbsp;&nbsp;
                    <Button variant="warning" onClick={() => { setModalDelete(true); setModaltype("delete")}}>
                    Delete Account
                </Button>
                &nbsp;&nbsp;
                <Button variant="success" onClick={() => setModalFeedback(true)}>
                    Give a Feedback
                </Button>
                &nbsp;&nbsp;
                <Button variant="secondary" onClick={() => setModalPassword(true)}>
                    Change Password
                </Button>
                <Button variant="danger" onClick={() => { setModalDelete(true); setModaltype("logout")}}>
                    Logout
                </Button>
                <br /><br />
                <Modalnew
                show={modalShow}
                onHide={() => setModalShow(false)}
                profile = {profiledetails}
                />
                <Modaldelete
                        show={modalDelete}
                        type = {modleType}
                onHide={() => setModalDelete(false)}
                profile = {profiledetails}
                />
                <ModalFeedback
                show={modalFeedback}
                onHide={() => setModalFeedback(false)}
                />
                <Modalpassword
                show={modalPassword}
                onHide={() => setModalPassword(false)}
                />
            </div>
            )
            
}
 
export default CusProfile
