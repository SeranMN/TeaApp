
import {Modal,Button} from 'react-bootstrap';
import {useContext, useState} from 'react';
import EditForm from './EditForm';

const Vehicle = ({employee}) => {

    const[show, setShow] = useState(true);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);



    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button onClick={handleShow} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Vehicle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" OnClick={handleClose}>
                        Close Button
                    </Button>

                </Modal.Footer>
            </Modal> 


        </>
    )
}

export default Vehicle;