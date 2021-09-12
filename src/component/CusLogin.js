import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ModalRegister from './ModalRegister.js'
import { useState } from 'react';


const CusLogin = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="loginform"> 
            <Form>
            <fieldset>
            <legend>Login</legend>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <br/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br/><br/>
            <h5>Don't have an account ? <a href="#" onClick={() => setModalShow(true)}>Sign Up</a></h5>
            
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