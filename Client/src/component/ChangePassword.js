import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const ChangePassword = (det) => {

    const [validated, setvalidated] = useState(false)
    const [oPassword, setCurrentPassword] = useState("");
    const [nPassword, setNewPassword] = useState("");
    const [cPassword, setNewConfirmPassword] = useState("");
    //const [password, setPassword] = useState(det.password);

    const handleSubmit = (event) => {
        const updatePassword = {
            
        }

        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            // if(nPassword == cPassword && oPassword == password){
            //     axios
            //     //.put(`http://localhost:5000/login/update/${email}`, updatePassword)
            //     .then(() => alert("Successfully Updated"))
            //     .catch((err) => alert(err));

            // } else {
            //     alert("Password Mismatch");
            // }
        }
        setvalidated(true);
    };

    

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <FloatingLabel controlId="oPassword" label="Enter Current Password">
                <Form.Control
                    type="password" 
                    placeholder="Enter Current Password" 
                    value={oPassword} 
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="nPassword" label="Enter New Password">
                <Form.Control
                    type="password"
                    placeholder="Enter New Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={nPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Password must contain at least 8 characters with at least one uppercase letter and a digit
                </Form.Control.Feedback>
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="cPassword" label="Re-enter New Password">
                <Form.Control
                     type="password" 
                     placeholder="Re-enter New Password" 
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     value={cPassword} 
                     onChange={(e) => setNewConfirmPassword(e.target.value)}
                     required
                />
            </FloatingLabel>
            <br />
            <Button variant="primary" type="submit">Apply Changes</Button>

            </Form>
        </div>
    )
}

export default ChangePassword
