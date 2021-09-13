 import { Form,Button} from "react-bootstrap"
 //import { useContext, useEffect,useState } from 'react';
 

const AddForm = () => {

    /* useEffect (() => {
        consol.log("COMPONENT MOUNTED");
        return() => {
            console.log("COMPONENT UNMOUNTED")
        }
    },[]) */





    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required />
            </Form.Group>
            <br/>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required />
            </Form.Group>
            <br/>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address "
                    rows={3} />
            </Form.Group>
            <br/>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone "
                     />
            </Form.Group>
            <br/>

            <Button variant ="success" type="submit" block>
                Add New Vehicle
            </Button>

        </Form>
    )
}
export default AddForm; 