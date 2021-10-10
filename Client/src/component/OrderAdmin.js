import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useEffect } from 'react';
// import { Navbar } from 'react-bootstrap';
import Navbar from './NavbarAshen';
import Box from '@material-ui/core/Box';


const OrderAdmin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [orders, setOrders] = useState([]);
  
  useEffect(()=>{

    function getOrders(){

    axios.get("http://localhost:5000/order/").then((res)=>{

      console.log(res.data);

      setOrders(res.data);

    }).catch((err)=> { 

      alert(err.message);

    })

  }

  getOrders()

  },[])


    return (
        <div>

          <Navbar/>

        {orders.map((order) => 

      <Card className="text-center" style={{marginLeft:"300px"}}>

     <Card.Header>Order </Card.Header>
     
    <Card.Body >

    <Box display="flex" justifyContent="left" m={1} p={1} bgcolor="background.paper" width="100%"> 
    <Box p={1}  padding="3rem" bgcolor="grey.300" >
    <Card.Img style={{ width: '18rem' }} variant="top" src="/blacktea.jpg" />
    </Box>
    <Box  p={1} bgcolor="grey.300" width="60%"  >
     
      <Card.Title>Order details</Card.Title>
        <Card.Text> 
        <h6> Quantity:{order.quantity}</h6> 
        <h6>  Total Price:Rs.{order.subTotal} </h6>
        </Card.Text>
     
    <Card.Title>Shipping details</Card.Title>
    <Card.Text>
      <h6> {order.firstName} {order.lastName} </h6>
      <h6> {order.email} </h6>
      <h6> {order.address} </h6>
      <h6> {order.contactNo} </h6>
      <h6> {order.city} </h6>
      <h6> {order.region} </h6>
      <h6> {order.postalCode} </h6>

    </Card.Text>
     <Box  p={1} display="flex" justifyContent="space-between">
    <Box  p={1} display="flex"  >
    <Button variant="secondary" onClick={handleClose}>
            Decline
          </Button>
          </Box>

          <Box  p={1} display="flex"  >
          { order&&
          <Button variant="primary" onClick={handleClose}>
            Approve
          </Button>
          }
          </Box>
          </Box>
          </Box>
          </Box>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        
        )}   
        </div>
    )
}

export default OrderAdmin
