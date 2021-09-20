import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ModalRegister from './CusModalRegister.js'
import CusProfile from './CusProfile.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs';


const CusLogin = () => {

    const [modalShow, setModalShow] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [signin, setSignin] = useState();

    const history = useHistory();

    const navigate = () => {
        history.push("/CusProfile.js");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.get(`http://localhost:5000/login/${email}`)
        .then ((res) => {
            console.log(res.data.data.password);
            if (res.data){
                let hashPass = res.data.data.password;
                console.log(password);
                const isValid = bcrypt.compareSync(password, hashPass);
                if(isValid){
                    console.log(res.data);
                    const token ={
                        id: res.data.data._id,
                        name: res.data.data.name,
                        email:res.data.data.email,
                        type:res.data.data.type
                    }
                sessionStorage.setItem("token",JSON.stringify(token));
                navigate();
                alert("Login Successful");
                } else {
                    alert("Invalid Password");
                }
            } else {
                    alert("Invalid Email");
                
            }
        })
        //.catch ((err) => {alert(err.msg)})
        
        
    }

    // useEffect(() => {
    //     if(signin){
    //     //console.log(signin.data.password);
    //     //console.log(password);
    //     if(signin.data.password == password){
    //         alert("Successful");
    //      } else {
    //          alert("Failed");
    //      }
    //     console.log(signin);
    //     }
    // }, [signin])


    return (
        <div className="loginform"> 
            <Form onSubmit = {handleSubmit}> 
            <fieldset>
            <legend>Login</legend>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <br/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br/><br/>
            <h5>Don't have an account ? </h5>
            <Button onClick={() => setModalShow(true)}>Sign Up</Button>
            </fieldset>
            </Form>
            <ModalRegister
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> 
        </div>
     );
}
 
export default CusLogin;