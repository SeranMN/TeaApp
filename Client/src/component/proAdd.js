import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from "axios";
import './productc.css'

const Add = () =>{

const [validated, setvalidated] = useState(false)
const [productid, setProductID] = useState();
const [name, setName] = useState();
const [weight, setWeight] = useState();
const [price, setPrice] = useState();
const [filename,setFileName] = useState();

const onChangefile=e => {setFileName(e.target.files[0]);}
 
const handleSubmit = (event) => {
    const newProduct = {
        ProductID: productid,
        Name: name,
        weight: weight,
        price:price,
        imageURL:filename,
        
      };
    
    
    const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else {
        
          axios
            
            .post("http://localhost:5000/product/create", newProduct)
            .then(() => alert("Product Added"))
            .catch((err) => alert(err));
        } 
      setvalidated(true);
    };
 
  return (
      
          <Form noValidate validated={validated} onSubmit= {handleSubmit}>
            <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Product ID
            </Form.Label>
            
            <Form.Control 
            type="text" 
            placeholder="Enter Product ID"
            value={productid}
            onChange={(e) => setProductID(e.target.value)}
            required
           />
           <Form.Control.Feedback type="invalid">
             Please insert valid Product ID
           </Form.Control.Feedback>
          </Form.Group> 
         
         <Form.Group className="mb-3" controlId="formHorizontalName">
            <Form.Label>
                Name
            </Form.Label>
            
            <Form.Control 
            type="text" 
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
           />
           <Form.Control.Feedback type="invalid">
             Please insert Product Name
          </Form.Control.Feedback>
         </Form.Group>
 
        <Form.Group className="mb-3" controlId="formHorizontalPosition">
            <Form.Label>
             Weight (g)
           </Form.Label>
            <Form.Control 
            type="number" 
            min="0"
            placeholder="Enter Weight in grams"
            pattern="[0-9]"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 
            required
           />
          <Form.Control.Feedback type="invalid">
            Please insert Weight
          </Form.Control.Feedback>
        </Form.Group>
 
        <Form.Group className="mb-3" 
        controlId="formHorizontalPosition">
            <Form.Label>
             Price
           </Form.Label>
            <Form.Control 
            type="number" 
            min="0"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
            required
            />
          <Form.Control.Feedback type="invalid">
            Please insert Price
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
       <Form.Label>Add a image</Form.Label>
    <Form.Control type="file"
    // filename="imageURL"
    // value={filename}
    // onChange={(e) => setPrice(e.target.value)} 
    //  onChange={onChangefile}
    // required
     />
  </Form.Group>
 
       
 
        
        
      <Button variant="primary" type="submit">Submit</Button>
</Form>
  );
}

 
export default Add