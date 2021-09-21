import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Box from '@material-ui/core/Box';
import PlaceOrder from './PlaceOrder';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


const OrderDetails = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState([]);

  const [number, setNumber] = useState(1);

  const [orderdetails, setOrderDetails] = useState([])
  
  
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

  },[orders])

  const submit = (order) => {
    console.log(order)
          axios.delete(`http://localhost:5000/order/delete/${orderdetails._id}`).then(() => 
            alert("Successfully Deleted")).catch((err) => alert(err))
        }
          // console.log(product._id)
        
      
  // useEffect(() => {
  //  console.log(order)
  // }, [])
 
  return (
    <div>
      {orders.map((order) => 
      
      <Card className="text-center" style={{marginLeft:"300px"}}>
        
       
        
      <Card.Header>Order {number} </Card.Header>
      
    <Card.Body >

    <Box display="flex" justifyContent="left" m={1} p={1} bgcolor="background.paper" width="100%"> 
    <Box p={1}  padding="3rem" bgcolor="grey.300" >
    <Card.Img style={{ width: '18rem' }} variant="top" src="/blacktea.jpg" />
    </Box>
    <Box  p={1} bgcolor="grey.300" width="60%">

    <Card.Title>Order details</Card.Title>
    <Card.Text> 
    <h6> Quantity:{order.quantity}</h6> <h6>  Total Price:Rs.{order.subTotal} </h6>
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
    <Button variant="secondary" onClick={() => {
      submit();
     setOrderDetails(order)}
    }>
            Delete
          </Button>
          </Box>

          <Box  p={1} display="flex"  >
          <PlaceOrder order={order}/>
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

export default OrderDetails


