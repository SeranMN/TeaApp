import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
  //import { useState } from 'react';
import SaddModal from './proStockaddModal';
// import {FaTimes} from "react-icons/im";
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import { DropdownButton } from 'react-bootstrap';
    
import {useState, useEffect } from "react";
//  import ModleSupplier from "./ModleSupplier";
  import ModleDelete from "./proModleDelete";
 import axios from "axios";
 import proSearchBar from './proSearchBar';
 


const ProductStock = ({ProductStockID, ProductStock, onClick }) => {
    const [modalShowp, setModalShowp] = useState(false);
    const [modaldelete, setModaldelete] = useState(false);
    const [deleteProductStock, setdeleteProductStock] = useState(false);

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
        <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>
        
            <h3 style={{marginLeft: "750px", marginTop: "10px"}}>PRODUCT STOCK</h3>
            <hr></hr> 
            <proSearchBar/>
            <Button variant="primary" onClick={() => setModalShowp(true)}>ADD STOCK</Button>
            <SaddModal show = {modalShowp} onHide = {() => setModalShowp(false)} />
            
            <hr></hr>
            

<Table striped bordered hover>
        <thead>
          <tr>
            
            <th>ProductID</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        {ProductStocks.map((ProductStock) => (
          <tbody key={ProductStock._id}>

          
    <tr>
    <td>{ProductStock.ProductID}</td>
    <td>{ProductStock.Quantity}</td>
    <td>{ProductStock.Date}</td>
     
    
    <td>
                <div>
                  
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <FaTrash
                      onClick={() => {
                        setModaldelete(true);
                        setdeleteProductStock(ProductStock);
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                      title="Delete Product Stock"
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        
        ))}
      </Table>
      {/* <ModleSupplier
        show={modalShow}
        onHide={() => setModalShow(false)}
        supplierDet={supplierDet}
      /> */}
      <ModleDelete
        show={modaldelete}
        onHide={() => setModaldelete(false)}
        deleteProductStock={deleteProductStock}
      />
            
        </div>
    )
}

export default ProductStock
