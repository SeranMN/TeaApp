import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import {useState, useEffect } from "react";
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import './productc.css'

const Reportpage = () => {

    const [ProductStocks, setProductStock] = useState([]);

    useEffect(() => {
        const getProductStocks = () => {
          axios
            .get("http://localhost:5000/productStock")
            .then((res) => {
              setProductStock(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getProductStocks();
      });
    return (
        <div>
            <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

<h3 style={{marginLeft: "750px", marginTop: "10px"}}>PRODUCT STOCK</h3>
<hr></hr> 
<DropdownButton id="dropdown-basic-button" title="Select Month">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<hr></hr>
<Table striped bordered hover>
        <thead>
          <tr>
            
            <th>ProductID</th>
            <th>Quantity</th>
            <th>Date</th>
            
          </tr>
        </thead>
        {ProductStocks.map((ProductStock) => (
          <tbody key={ProductStock._id}>

          
    <tr>
    <td>{ProductStock.ProductID}</td>
    <td>{ProductStock.Quantity}</td>
    <td>{ProductStock.Date}</td>
     
    
   
            </tr>
          </tbody>
        
        ))}
      </Table>
<Button style={{marginLeft: "750px"}} variant="primary" >Print PDF</Button>
</div>

        </div>
    )
}

export default Reportpage
