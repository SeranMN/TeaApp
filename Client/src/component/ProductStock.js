import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import SaddModal from './proStockaddModal';
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import {useState, useEffect } from "react";
import ModleDelete from "./proModleDelete";
import axios from "axios";
import Navbar from './ProductSidenavbar';
import './productc.css'
 


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
      <div> <Navbar/>
        <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>
        
            <h3 >PRODUCT STOCK</h3>
            <hr></hr> 
            
            <Button className="pbtn" variant="primary" onClick={() => setModalShowp(true)}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD STOCK</Button>
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
      
          <ModleDelete
            show={modaldelete}
            onHide={() => setModaldelete(false)}
            deleteProductStock={deleteProductStock}
          />
          </div>  
        </div>
    )
}

export default ProductStock
