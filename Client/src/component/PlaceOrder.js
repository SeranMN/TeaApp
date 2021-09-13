import {React,useState} from 'react'
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



const PlaceOrder = ({product}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ProductName = product.productName
    const UnitPrice = product.unitPrice


    const [Email, setEmail] = useState("")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Address, setAddress] = useState("")
    const [ContactNo, setContactNo] = useState("")
    const [City, setCity] = useState("")
    const [Region, setRegion] = useState("")
    const [PostalCode, setPostalCode] = useState("")
    const [Quantity, setQuantity] = useState(1)
    const [Color, setColor] = useState("grey")

    const onSubmit = (e) => {
      e.preventDefault()
      console.log(Email,FirstName,LastName,Address,ContactNo,City,Region,PostalCode)
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
    
    return (
        <div>
         
       
       
        
        
            <Button variant="primary" onClick={handleShow} >
            Add to Cart
            </Button> 

        <Modal size="xl" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Item Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={onSubmit}>

          
        <Container>
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" width="100%">
        <Box p={1}  padding="3rem" bgcolor="grey.300" width="60%">
          
        
            <h5>Product Name : {ProductName}</h5>
            <h5>Unit Price : Rs.{UnitPrice}</h5>
            
           
            <Form.Label>Quantity</Form.Label>
            <Row className="justify-content-md-center">
          <Col xs lg="2">
          <FiMinusCircle size={30} color={Color} onClick={decrease}/>
          </Col>
          <Col md="auto"><Form.Control type={Number} value={Quantity}  onChange={(e)=>setQuantity(e.target.value)} /> </Col>
          <Col xs lg="2">
          <FiPlusCircle size={30} onClick={()=>{setQuantity(Quantity+1)
             setColor("black")}} />
          </Col>
          </Row>
            
            <Form.Group as={Col} >
            <Form.Label>Sub Total</Form.Label>
            <Form.Control type={Number}  value={"Rs. "+Quantity*UnitPrice} disabled="disabled"/>
            </Form.Group>
            </Box>
            
  <Box flexGrow={1} p={1} bgcolor="grey.300">
                  
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
    <Form.Control value={ContactNo} onChange={(e)=>setContactNo(e.target.value)} required/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>City</Form.Label>
      <Form.Control value={City} onChange={(e)=>setCity(e.target.value)} required/>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Region</Form.Label>
      <Form.Select value={Region} onChange={(e)=>setRegion(e.target.value)} > 
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
      <Form.Control value={PostalCode} onChange={(e)=>setPostalCode(e.target.value)} required/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  <Button style={{marginLeft:"620px"}} variant="primary" type="submit">
    Submit
  </Button>
  </Box>
  </Box>
</Container>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
        </div>
    )
}

export default PlaceOrder
