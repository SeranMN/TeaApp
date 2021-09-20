import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'


 
const Edit = ({det}) => {
 
    const [validated, setvalidated] = useState(false)
    const [productid, setProductID] = useState(det != null ? (det.ProductID) : (''));
    const [name, setName] = useState(det != null ? (det.Name) : (''));
    const [weight, setWeight] = useState(det != null ? (det.weight) : (''));
    const [price, setPrice] = useState(det != null ? (det.price) : (''));
   
    const handleSubmit = (event) => {
        const newProduct = {
          ProductID: productid,
          Name: name,
          weight: weight,
          price: price,
          
        };
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
          if (det == null) {
          axios
          .then(() => alert("Product is not inserted"))
            
        } else {
          
            axios
              .put(`http://localhost:5000/product/update/${det._id}`, newProduct)
              .then(() => alert("Product Updated"))
              .catch((err) => alert(err));
          }
        }
        setvalidated(true);
      };
 
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3" controlId="formHorizontalName"> */}
      <Form.Group className="mb-3" controlId="formProductID">
            <Form.Label>
                Product ID
            </Form.Label>
            
            <Form.Control 
            type="text" 
            placeholder="Product ID"
            value={productid}
           onChange={(e) => setProductID(e.target.value)}
          required
           /></Form.Group>
        {/* <Form.Group className="mb-3" controlId="formHorizontalName"> */}
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>
                Name
            </Form.Label>
            
            <Form.Control 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formWeight">
        {/* <Form.Group className="mb-3" controlId="formHorizontalPosition"> */}
            <Form.Label>
             Weight
        </Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Weight" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
        </Form.Group>
 
        <Form.Group className="mb-3" controlId="formPrice">
        {/* <Form.Group className="mb-3" controlId="formHorizontalPosition"> */}
            <Form.Label>
             Price
        </Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Edit a image</Form.Label>
        <Form.Control type="file" />
        </Form.Group>
 
       
 
        
        
      <Button variant="primary" type="submit">Save Changes</Button>
</Form>
  )
}
 
export default Edit