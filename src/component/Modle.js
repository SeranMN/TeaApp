import Modal from 'react-bootstrap/Modal'
import { Button, ModalBody } from 'react-bootstrap'
import SupplierForm from './Supplier_Form'

const Modle = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Supplier
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <SupplierForm/>
            </ModalBody>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modle