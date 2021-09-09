import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Modalnew from './component/Modalnew.js';
import Profile from './component/Profile.js';
import ModalFeedback from './component/ModalFeedback.js'
import Modalpassword from './component/Modalpassword.js'
import Modaldelete from './component/Modaldelete.js';



const CusProfile = () => {

            const [modalShow, setModalShow] = React.useState(false);
            const [modalFeedback, setModalFeedback] = React.useState(false);
            const [modalPassword, setModalPassword] = React.useState(false);
            const [modalDelete, setModalDelete] = React.useState(false);
            
            return (
            <div>
                 <h3>User Profile</h3>
                <Profile />

                <br/><br />
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Update Details
                </Button>
                &nbsp;&nbsp;
                <Button variant="warning" onClick={() => setModalDelete(true)}>
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
                <br /><br />
                <Modalnew
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
                <Modaldelete
                show={modalDelete}
                onHide={() => setModalDelete(false)}
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

