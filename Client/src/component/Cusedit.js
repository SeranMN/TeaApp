import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios';

const Cusedit = ({det}) => {
    const [validated, setvalidated] = useState(false)
    const [fname, setFirstName] = useState(det != null ? (det.firstName) : (''))
    const [lname, setLastName] = useState(det != null ? (det.lastName) : (''))
    const [email, setEmail] = useState(det != null ? (det.email) : (''))
    const [contactno, setContactNo] = useState(det != null ? (det.contactNo) : (''))
    const [nic, setNIC] = useState(det != null ? (det.NIC) : (''))
    const [address, setAddress] = useState(det != null ? (det.address) : (''))
    //const [photo, setPhoto] = useState(det != null ? (det.photo) : (''))
    const [selectedphoto, setSelectedPhoto] = useState();
    

    const handleSubmit = (event) => {

        const updateCustomer = {
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "contactNo": contactno,
            "NIC": nic,
            "address": address,
        }
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            axios
                .put(`http://localhost:5000/customer/update/${email}`, updateCustomer)
                .then(() => alert("Successfully Updated"))
                .catch((err) => alert(err));
        }
        setvalidated(true);
      };

      /*const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedPhoto(e.target.files[0]);
        }
        setPhoto(e.target.value);
    
      };*/

    return (
        <div className="editform">
        <Form onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
                value={fname}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                value={lname}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email" 
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactno">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
                pattern="[0-9]{9}"
                value={contactno}
                onChange={(e) => setContactNo(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nic">
            <Form.Label>NIC</Form.Label>
            <Form.Control
                pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
                value={nic}
                onChange={(e) => setNIC(e.target.value)}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
                 as= "textarea" 
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                 required
            />
        </Form.Group>

        <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload a Photo</Form.Label>
            <Form.Control
                 type="file" 
                 accept=""
                 //onChange={imageChange}
                 //required
            />

            {selectedphoto && (
                <div
                    style={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "10%",
                        maxHeight: "10%",
                    }}
                >
                    <img src={URL.createObjectURL(selectedphoto)} alt="Profile" />
                </div>
            )}
        </Form.Group>



        <Button variant="primary" type="submit">Save Changes</Button>

        </Form>
        </div>
 
        
    )
}

export default Cusedit