import {Modal,Button} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {VehicleContext} from '../contexts/VehicleContext';
import Vehicle from './Vehicle';
import AddForm from './AddForm';



const VehicleList = () => { 

 
        const {employees} = useContext(VehicleContext);
        const[show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);

       /*  useEffect (( ) => {
            handleClose()
        },[employees]) */

      

    return (

        <>

            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b> Vehicles</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button variant="primary" OnClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Vehicle</span></Button>
                       
                    </div>
                </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone  </th>
                        <th >Actions </th>
                    </tr>
                </thead>
                <tbody>
                
                        {
                            employees.map(employee =>(
                                <tr key={employee.id}>
                                     <Vehicle employee={employee}/>

                                </tr>
                            
                            ))
                        }
                       
                
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Vehicle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close Button
                    </Button>

                </Modal.Footer>
            </Modal>  

        </>
    )
}

export default VehicleList;