import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";

const SupplierForm = ({ det }) => {
  const [validated, setvalidated] = useState(false);
  const [name, setName] = useState(det != null ? det.name : "");
  const [address, setAddress] = useState(det != null ? det.address : "");
  const [nic, setNic] = useState(det != null ? det.nic : "");
  const [mobile, setMobile] = useState(det != null ? det.mobile : "");
  const [email, setEmail] = useState(det != null ? det.email : "");
  const [password, setPassword] = useState(det != null ? det.password : "");
  const [cpassword, setCPassword] = useState(det != null ? det.cpassword : "");
  const [image, setImage] = useState(det != null ? det.image : "");
  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (event) => {
    const newSupplier = {
      name: name,
      address: address,
      nic: nic,
      mobile: mobile,
      email: email,
      image: image,
    };
    

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("address", address);
    // formData.append("nic", nic);
    // formData.append("mobile", mobile);
    // formData.append("email", email);
    // formData.append("image",image)
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (det == null) {
        if (password == cpassword) {
          
          const newLogin = {
            email: email,
            type: "supplier",
            password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
            //password: password,
          };

          axios
            .post("http://localhost:5000/supplier/add", newSupplier)
            .then(() => alert("Supplier Added"))
            .catch((err) => alert(err));

          axios
            .post("http://localhost:5000/login/add", newLogin)
            .then(() => alert("Successfully Registered"))
            .catch((err) => alert(err));
        } else {
          alert("Password Mismatch");
        }
      }else{
             axios

               .put(`http://localhost:5000/supplier/update/${det._id}`,newSupplier)
               .then(() => alert("Supplier Updated"))
               .catch((err) => alert(err));
           }
      }
    
    setvalidated(true);
  };

  // This function will be triggered when the image field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    setImage(e.target.value);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      // encType="multipart/form-data"
    >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Residental Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNIC">
        <Form.Label>NIC Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="National ID Number"
          pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
          value={nic}
          onChange={(e) => setNic(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid NIC Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Moblie Number"
          title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Email Address
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        {det == null ? (
          <div>
            <Form.Label>Create New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
            </Form.Text>
          </div>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formrePassword">
        {det == null ? (
          <div>
            <Form.Label>Re Enter New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re Enter Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
          </div>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group controlId="formImage" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          filename="image"
          accept="image/*"
          value={image}
          onChange={imageChange}
        />
        {selectedImage && (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              maxWidth: "10%",
              maxHeight: "10%",
            }}
          >
            <img src={URL.createObjectURL(selectedImage)} alt="Profile" />
          </div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        {det != null ? "Save Changes" : "Add"}
      </Button>
    </Form>
  );
};

export default SupplierForm;
