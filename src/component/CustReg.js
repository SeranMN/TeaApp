import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

const CustReg = ({det}) => {
    const [validated, setvalidated] = useState(false)
    const [fname, setFirstName] = useState();
    const [lname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [contactno, setContactNo] = useState();
    const [nic, setNIC] = useState();
    const [address, setAddress] = useState();
    const [photo, setPhoto] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setConfirmPassword] = useState();
    const [selectedPhoto, setSelectedPhoto] = useState();



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setvalidated(true);
      };

      const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedPhoto(e.target.files[0]);
        }
        setPhoto(e.target.value);
    
      };

      const checkPassword = () =>{
          var v1 = document.getElementById("password").value;
          var v2 = document.getElementById("cpassword").value;

          if(v1==v2){
              alert("Success");
          } else {
              alert("Password Mismatch");
          }
      }

    return (
        <div className="regform">
        <Form noValidate validated={validated} onSubmit={handleSubmit, checkPassword}>
        <fieldset>
        <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
                 placeholder="First Name" 
                 value={fname}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                 placeholder="Last Name" 
                 value={lname}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                 type="email" 
                 placeholder="abcd@defg.com"
                 pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" 
                 value={email}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactno">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
                 placeholder=""
                 pattern="[0-9]{10}"
                 value={contactno}
                 required
             />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nic">
            <Form.Label>NIC</Form.Label>
            <Form.Control
                 placeholder=""
                 pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
                 value={nic}
                 required

        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
                 as= "textarea" 
                 value={address}
                 required
            />
        </Form.Group>

        <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload a Photo</Form.Label>
            <Form.Control
                 type="file"
                 value={photo}
                 onChange={imageChange}
                 required
            />
            {selectedPhoto && (
            <div
                style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                maxWidth: "10%",
                maxHeight: "10%",
                }}
            >
                <img src={URL.createObjectURL(selectedPhoto)} alt="Profile" />
            </div>
            )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                 type="password" 
                 placeholder="Enter a Password"
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 value={password} 
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                 type="password" 
                 placeholder="Re-enter the Password" 
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 value={cpassword}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox">
            <Form.Check
                 type="checkbox" 
                 label="I Agree to Terms & Conditions" 
                 required
                 
            />
        </Form.Group>



        <Button variant="primary" type="submit">Submit</Button>

        </fieldset> 
        </Form>
        </div>
 
        
    )
}

export default CustReg