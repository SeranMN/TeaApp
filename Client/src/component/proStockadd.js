import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from "axios";

 
const Sadd = () => {
 
    const [validated, setvalidated] = useState(false)
    const [productID, setProductID] = useState();
    const [quantity, setQuantity] = useState();
    const [date, setDate] = useState();
    
    
     
    const handleSubmit = (event) => {
        const newProductStock = {
            ProductID: productID,
            Quantity: quantity,
            Date:date,
            
          };
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else {
            
              axios
                .post("http://localhost:5000/productStock/create", newProductStock)
                .then(() => alert("Product Stock Added"))
                .catch((err) => alert(err));
            } 
          setvalidated(true);
        };
 
  return (
    <Form  noValidate validated={validated} onSubmit= {handleSubmit}>
        <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Product ID
            </Form.Label>
            
            <Form.Control type="text" placeholder="Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)} />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Quantity
        </Form.Label>
            <Form.Control type="text" placeholder="Quantity" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Date
        </Form.Label>
            <Form.Control type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}/>
        </Form.Group>
        
 
       
 
        
        
      <Button variant="primary" type="submit">Submit</Button>
</Form>
  )
}
export default Sadd