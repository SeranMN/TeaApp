//import Button from '@restart/ui/esm/Button';
import React, {useContext} from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Delete.css'
import { Button} from "react-bootstrap";

const Delete = () => {

    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();
    

    const deleteUser=(id) => {
        const user = users.filter(user => user.id != id);
        setUsers(user);

    }
    
    
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure?</Modal.Title>
                </Modal.Header>
                <ModalFooter>
                    <Link to="/">
                        <Button className="delete_btn" variant="info">Cancel</Button>
                        <Button onClick={() => deleteUser(id)} variant="danger">Delete</Button>
                    </Link>
                </ModalFooter>
            </Modal.Dialog>
            
        </div>
    )
}

export default Delete;
