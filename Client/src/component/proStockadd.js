import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from "axios";
import './productc.css'

 
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

        const disablePastDays = () => {
          const today = new Date();
          const dd = String(today.getDate() ).padStart(2, "0");
          const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
          const yyyy = today.getFullYear();
          return yyyy + "-" + mm + "-" + dd;
        };
      
        const disableFutureDays = () => {
          const date = new Date();
          const ddf = String(date.getDate()).padStart(2, "0");
          const mmf = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
          const yyyyf = date.getFullYear();
          return yyyyf + "-" + mmf + "-" + ddf;
        };
 
  return (
    <Form  noValidate validated={validated} onSubmit= {handleSubmit}>
        <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Product ID
            </Form.Label>
           <Form.Control 
            type="text" 
            placeholder="Enter Product ID"
            value={productID}
            onChange={(e) => setProductID(e.target.value)} 
            required
            />
            <Form.Control.Feedback type="invalid">
                Please insert valid Product ID
            </Form.Control.Feedback>
            
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Quantity
            </Form.Label>
            <Form.Control 
             type="number" 
             min="0"
             placeholder="Enter Product Quantity" 
             value={quantity}
             onChange={(e) => setQuantity(e.target.value)} 
             required
            />
            <Form.Control.Feedback type="invalid">
                Please insert Quantity
            </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Date
            </Form.Label>
            <Form.Control 
             type="date"
             min={disablePastDays()}
             max={disableFutureDays()}
             value={date}
             onChange={(e) => setDate(e.target.value)}
             required
            />
            <Form.Control.Feedback type="invalid">
                Please insert Date
            </Form.Control.Feedback>
        </Form.Group>
        
 
       
 
        
        
      <Button variant="primary" type="submit">Submit</Button>
</Form>
  )
}
export default Sadd