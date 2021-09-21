//import Button from '@restart/ui/esm/Button';
import React, {useContext} from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './Delete.css'
import { Button} from "react-bootstrap";
import axios from 'axios';
//import Vehicle from '../../../../Server/src/modal/Vehicle';


const Delect2 = ({Delivery}) => {

    //const [users, setUsers] = useContext(UserContext);
    //const {id} = useParams();
    

    const deleteUser=() => {
        //const user = users.filter(user => user.id != id);
        //setUsers(user);
        console.log(Delivery._id)
        axios.delete(`http://localhost:5000/Vehicle/delete/${Delivery._id}`).then(() => {
        alert("Deleted")
      }).catch((err) => {
        alert(err)
      })

    }
    
    
    return (
        <div>
            <Modal.Dialog >
                <Modal.Header closeButton>
                    <Modal.Title>Are You sure, you want to delete this file?</Modal.Title>
                </Modal.Header>
                <ModalFooter>
                    <Link to="/home2">
                        <Button className="delete_btn" variant="info">Cancel</Button>
                        <Button onClick={ deleteUser} variant="danger">Delete</Button>
                    </Link>
                </ModalFooter>
            </Modal.Dialog>
            
        </div>
    )
}

export default Delect2;
