import React from 'react'
import product_card from '../data/product_data';
import Button from 'react-bootstrap/Button'
import AddModal from './proAddModal';
import AModal from './proEditModal';
import axios from "axios";
import {useState, useEffect } from "react";
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModleDelete1 from "./ProductModalDelete";
import ProductStock from './ProductStock';
import Navbar from './ProductSidenavbar';
import './productc.css'

    
    const MainContent2 = ({ProductID, Product, onClick }) => {
    
      const [modaldelete1, setModaldelete1] = useState(false);
      const [deleteProduct, setdeleteProduct] = useState(false);
      const [productDet, setProductDet] = useState('')
      const [Products, setProduct] = useState([]);

        useEffect(() => {
            const getProducts = () => {
              axios
                .get("http://localhost:5000/product")
                .then((res) => {
                  setProduct(res.data);
                  console.log(res.data);
                })
                .catch((err) => {
                  alert(err.msg);
                });
            };
            getProducts();
          },[]);
       

      console.log(product_card);
      const listItems = Products.map((Product)=>
            <div className="item" key="{Product._id}">
                <div className="card_img" >
                   <img className="imagee" src="./images/1.jpg"/>
               </div>
               <div className="item_header">
                    <div className="hh2">
                      <h2>{Product.Name}</h2></div>
                      <h2>{Product.weight}<spann>{Product.currency="g"}</spann></h2>
                      <p className="price"><spann>{Product.currency="Rs"}</spann>{Product.price}</p>


                  
                   <Button className="pbtnEdit" style={{margin:"30px 10px 4px 3px"}} variant="warning" onClick={() =>{
                      setModalShow1(true);
                      setProductDet(Product);}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaPencilAlt/>&nbsp;&nbsp;Edit </Button>
                  
                   <Button className="pbtnDelete" style={{margin:"0px 10px 4px 3px"}} variant="danger"onClick={() => {
                      setModaldelete1(true);
                      setdeleteProduct(Product);}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaTrash/>&nbsp;&nbsp;Delete</Button>  
                  

               </div>

           </div>

        )
        const [modalShow, setModalShow] = useState(false);
        const [modalShow1, setModalShow1] = useState(false);
        
        return (
          <div> 
            <Navbar/>
             <div style={{ marginLeft: "180px", marginTop: "20px", marginRight: "5px"}}>
               <div>   
                 <h1>PRODUCTS</h1>
                 <hr></hr>
               <div>
                
               <Button className="pbtn" variant="primary" onClick={() => setModalShow(true)}>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD PRODUCT</Button>
               <AddModal show = {modalShow} onHide = {() => setModalShow(false)} />
                <>
                </>           
             </div>
             
             <div className="main_content">
                  {listItems} 
            </div>
            </div> 
                 
                 
              <AModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                productDet={productDet}
              />

              <ModleDelete1
                show={modaldelete1}
                onHide={() => setModaldelete1(false)}
                deleteProduct={deleteProduct}
              />
            
              </div>
            </div>   
           
                
        )
    }
    
    export default MainContent2
    


