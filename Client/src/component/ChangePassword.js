import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FloatingLabel } from 'react-bootstrap'
import { useState } from 'react'

const ChangePassword = ({det}) => {

    const [validated, setvalidated] = useState(false)
    const [oPassword, setCurrentPassword] = useState();
    const [nPassword, setNewPassword] = useState();
    const [cPassword, setNewConfirmPassword] = useState();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setvalidated(true);
    };

    const checkPassword = () =>{
        var v3 = document.getElementById("nPassword").value;
        var v4 = document.getElementById("cPassword").value;

        if(v3==v4){
            alert("Success");
        } else {
            alert("Password Mismatch");
        }
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit ,checkPassword}>

            <FloatingLabel controlId="oPassword" label="Enter Current Password">
                <Form.Control
                    type="password" 
                    placeholder="Enter Current Password" 
                    value={oPassword} 
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
                    required
                />
            </FloatingLabel>
            <br />
            <FloatingLabel controlId="cPassword" label="Re-enter New Password">
                <Form.Control
                     type="password" 
                     placeholder="Re-enter New Password" 
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                     value={cPassword} 
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
