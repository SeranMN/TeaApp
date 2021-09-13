import { useContext } from "react";
import { Form,Button} from "react-bootstrap"
import { VehicleContext } from "../contexts/VehicleContext";

const EditForm = () => {

    const {updateVehicle} = useContext(VehicleContext);

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
                Edit Vehicle
            </Button>

        </Form>
    )
}
export default EditForm; 