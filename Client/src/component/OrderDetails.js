import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const OrderDetails = () => {


  return (
    <div>
      <Card className="text-center">
  <Card.Header>Order Details</Card.Header>
  <Card.Img style={{ width: '18rem' }} variant="top" src="/blacktea.jpg" />
  
    <Card.Body >
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      <h5>Green Tea</h5>
      <h5>Quantity: 1</h5>

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
      
    </div>
  )
}

export default OrderDetails


