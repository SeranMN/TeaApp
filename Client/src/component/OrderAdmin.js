import React, { useState } from 'react'
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

  const [toggle, setToggle] = useState(false);


  const Approved = (order) => {
    const status = { status: "Approved" }
    console.log(order)

    axios.put(`http://localhost:5000/order/status/${order._id}`, status).then(() => {
      setToggle(!toggle)

      alert("Succesfully Approved")
    }).catch((err) => alert(err))

  }


  const Declined = (order) => {
    const status = { status: "Declined" }

    axios.put(`http://localhost:5000/order/status/${order._id}`, status).then(() => {
      setToggle(!toggle)

      alert("Succesfully Declined")
    }).catch((err) => alert(err))
  }


  useEffect(() => {

    function getOrders() {

      axios.get("http://localhost:5000/order/").then((res) => {

        console.log(res.data);

        setOrders(res.data);

      }).catch((err) => {

        alert(err.message);

      })

    }

    getOrders()

  }, [toggle])



  return (
    <div>

      <Navbar />

      {orders.map((order) =>

        <Card className="text-center"  style={{ marginLeft: "250px", marginBottom: "50px", marginTop: "20px", marginRight: "30px", maxWidth: "1200px", backgroundColor: "#e0e0e0"}}>

          <Card.Header>Order:{order._id} </Card.Header>

          <Card.Body >
          <div style={{display:"flex", justifyContent:"flex-end"}}>
            <div  style={
                                      order.status === "Approved"
                                        ? { borderRight: "15px solid #0cce26",paddingRight: "8px" }
                                        : order.status == "Declined"
                                        ? { borderRight: "15px solid red",paddingRight: "8px" }
                                        : { borderRight: "15px solid orange",paddingRight: "8px" }
                                    }>{order.status} </div>
            </div>

            <Box display="flex" justifyContent="left" m={1} p={1} bgcolor="grey.300" width="100%">
              
              <Box p={1} padding="3rem" bgcolor="grey.300" >
             
                <Card.Img style={{ width: '18rem' }} variant="top" src="/blacktea.jpg" />
              </Box>
              <Box p={1} display="flex" justifyContent="space-evenly" bgcolor="grey.300" width="60%"  >
              <Box border="solid" padding="50px"> 
                <Card.Title> <h4>Order details</h4> </Card.Title>
                <Card.Text>
                  <h6> Quantity:{order.quantity}</h6>
                  <h6>  Total Price:Rs.{order.subTotal} </h6>
                </Card.Text>
              </Box>
              <Box border="solid" padding="50px"> 
                <Card.Title> <h4>Shipping details</h4> </Card.Title>
                <Card.Text>
                  <h6> {order.firstName} {order.lastName} </h6>
                  <h6> {order.email} </h6>
                  <h6> {order.address} </h6>
                  <h6> +94{order.contactNo} </h6>
                  <h6> {order.city} </h6>
                  <h6> {order.region} </h6>
                  <h6> {order.postalCode} </h6>
                  

                </Card.Text>
                </Box>
               
              </Box>
              
            </Box>
            <Box p={1} display="flex" justifyContent="space-between">
                  <Box p={1} display="flex"  >
                    <Button variant="danger" onClick={() => Declined(order)}>
                      Decline
                    </Button>
                  </Box>

                  <Box p={1} display="flex"  >
                    {order &&
                      <Button variant="primary" onClick={() => Approved(order)}>
                        Approve
                      </Button>
                    }
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
