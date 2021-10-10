import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ModalRegister from './CusModalRegister.js'
import CusProfile from './CusProfile.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import swal from 'sweetalert';


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
                swal("Success!", "Login Successful", "success");
                } else {
                    swal("Error !", "Invalid Password", "error");
                }
            } else {
                swal("Error !", "Invalid Email", "error");
                
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
        <div style = {{
                backgroundImage: `url("https://s1.1zoom.me/b5057/817/Tea_Kettle_Lemons_Cup_542436_3840x2400.jpg")`,
                height: "100vh",
                backgroundSize: "cover",}}> 

            <br />
            <div className="loginform" > 
                <Form onSubmit = {handleSubmit}> 
                <h3>Login</h3>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <Form.Control.Feedback type="invalid">
                        Please insert an valid Email
                    </Form.Control.Feedback>

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
                    
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid password
                    </Form.Control.Feedback>
                </Form.Group>

                <br/>
                <Button variant="success" type="submit">
                    Login
                </Button>
                <br/><br/>
                <h5>Don't have an account ? </h5>
                <Button variant="success" onClick={() => setModalShow(true)}>Sign Up</Button>
                </Form>
            </div>
            <ModalRegister
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> 
        </div>
     );
}
 
export default CusLogin;