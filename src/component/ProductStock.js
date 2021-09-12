import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import SaddModal from './SaddModal';
// import {FaTimes} from "react-icons/im";
import { DropdownButton } from 'react-bootstrap';



const ProductStock = () => {
    const [modalShowp, setModalShowp] = useState(false);
    return (
        <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

            <h3 style={{marginLeft: "750px", marginTop: "10px"}}>PRODUCT STOCK</h3>
            <hr></hr> 
            <Button variant="primary" onClick={() => setModalShowp(true)}>ADD STOCK</Button>
            <SaddModal show = {modalShowp} onHide = {() => setModalShowp(false)} />
            
            <hr></hr>
            <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Product ID</th>
      <th>Quantity</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Sp001</td>
      <td>50</td>
      <td>15 june 2021</td>
      {/* <td><FaTimes /></td> */}
    </tr>
    <tr>
      <td>Sp002</td>
      <td>75</td>
      <td>6 july 2021</td>
      {/* <td><FaTimes/></td> */}
    </tr>
    <tr>
      <td>Sp003</td>
      <td >80</td>
      <td>25 august 2021</td>
    </tr>
  </tbody>
</Table>
            
        </div>
    )
}

export default ProductStock
