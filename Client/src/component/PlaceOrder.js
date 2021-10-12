import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Placeholder } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle} from 'react-icons/fi';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import OrderDetails from './OrderDetails';
import {TiShoppingCart} from "react-icons/ti";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });

const PlaceOrder = ({Products, order, product}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const ProductName = product.Name
    const UnitPrice = product.price
    const ProductId = product._id
    

    const [Email, setEmail] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Address, setAddress] = useState("")
    const [ContactNo, setContactNo] = useState("")
    const [City, setCity] = useState("")
    const [Region, setRegion] = useState("")
    const [PostalCode, setPostalCode] = useState("")
    const [Quantity, setQuantity] = useState(1)
    const [SubTotal, setSubTotal] = useState()
    const [Color, setColor] = useState("grey")
    const [OrderId, setOrderId] = useState("")


    const [open, setOpen] = React.useState(false);

    const handleClick1 = () => {
      setOpen(true);
    };
  
    const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    

    const onSubmit = (e) => {
      e.preventDefault()
      console.log(Email,FirstName,LastName,Address,ContactNo,City,Region,PostalCode,Quantity)
      console.log(SubTotal)

      const Order = {"firstName":FirstName,
                      "lastName":LastName,
                      "email":Email,
                      "address":Address,
                      "contactNo":ContactNo,
                      "city":City,
                      "region":Region,
                      "postalCode":PostalCode,
                      "quantity":Quantity,
                      "subTotal":SubTotal, 
                      "productName":ProductName,
                      "unitPrice":UnitPrice,
                        "status":"Pending",}
  
    

    axios.post("http://localhost:5000/order/add", Order).then (()=>{
    
      handleClick1()

      setFirstName("");
      setLastName("");
      setEmail("");
      setAddress("");
      setContactNo("");
      setCity("");
      setRegion("");
      setPostalCode("");
      setQuantity("");
      setSubTotal("");
      handleClose()


  }).catch((err)=>{alert(err)

  })

} 
    
  

    const decrease = () => {
    
      if (Quantity > 1){
      setQuantity(Quantity-1)
      {setColor("black")} 
      
      }
     if (Quantity <= 2){
      {setColor("grey")} 
     }
    }
    useEffect(() => {
      console.log (SubTotal)
    }, [SubTotal])

    const handleTotal = (Quantity)=>{
      setQuantity(Quantity)
      
      setSubTotal(Quantity*UnitPrice)

      
    }
    

    useEffect(() => {
      handleTotal(Quantity)
      
    }, [Quantity])
    
    return (
        <div>

          
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Order Added SuccesFully!
        </Alert>
        </Snackbar>

        {Products&&
        <Button className="btn1" style={{margin:"30px 10px 4px 3px"}} variant="warning" onClick={handleShow} ><TiShoppingCart/></Button>
        }

          {/* // :
            // <Button variant="primary" onClick={handleShow} >
            // Add to Cart
            // </Button>  */}
          

        <Modal size="xl" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Item Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={onSubmit}>

          
        <Container>
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" width="100%">
        <Box p={1}  padding="3rem" bgcolor="grey.300" width="40%">
        <Row className="mb-3">
    <Form.Group as={Col} > 
    <Form.Label style={{marginLeft:"100px"}}>Order Details</Form.Label>
    </Form.Group>
    </Row>
        
        
            <h5>Product Name : {ProductName}</h5>
            <h5>Unit Price : Rs.{UnitPrice}</h5>
            {/* <h5>ProductId : {ProductId}</h5> */}
            
            <Form.Label>Quantity</Form.Label>
           
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <FiMinusCircle size={30} color={Color} onClick={decrease}/>
          
          <Form.Control style={{width:"40%"}} type={Number} value={Quantity}  onChange={(e)=>setQuantity(e.target.value)} />
          
          <FiPlusCircle size={30} onClick={()=>{setQuantity(Quantity+1)
             setColor("black")}} />
          </div>
            
            <Form.Group as={Col} style={{marginTop:"20px"}} >
            <Form.Label>Sub Total</Form.Label>
            <Form.Control type={Number}  value={SubTotal}  onChange={(e)=>setSubTotal(e.target.value)} disabled="disabled"/>
            </Form.Group>
            </Box>
            
  <Box flexGrow={1} p={1} bgcolor="grey.300">
  <Row className="mb-3">
    <Form.Group as={Col} > 
    <Form.Label style={{marginLeft:"250px"}}>Shipping Details</Form.Label>
    </Form.Group>
    </Row>              
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
    </Form.Group>
    </Row>

    <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} required/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" value={LastName} onChange={(e)=>setLastName(e.target.value)} required/>
    </Form.Group>
    </Row>
  

  <Form.Group className="mb-3" >
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" value={Address} onChange={(e)=>setAddress(e.target.value)} required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Contact No</Form.Label>
    <Form.Control value={ContactNo} title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}" onChange={(e)=>setContactNo(e.target.value)} required/>
      <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number
      </Form.Control.Feedback>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>City</Form.Label>
      <Form.Control value={City} onChange={(e)=>setCity(e.target.value)} required/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Region</Form.Label>
      <Form.Select value={Region} onChange={(e)=>setRegion(e.target.value)} > 
        <option>Select Region</option>
        <option>Sri Lanka</option>
        <option>Dubai</option>
        <option>Australia</option>
        <option>Italy</option>
        <option>United Kingdom</option>
        <option>New Zealand</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Postal code</Form.Label>
      <Form.Control value={PostalCode} pattern="[0-9]{5}" onChange={(e)=>setPostalCode(e.target.value)} required/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button style={{marginLeft:"500px"}} variant="primary"  type="submit">
    Place Order
  </Button>
  </Box>
  </Box>
</Container>
</Form>

        </Modal.Body>
        
      </Modal>

      
        </div>
    )
}


export default PlaceOrder
