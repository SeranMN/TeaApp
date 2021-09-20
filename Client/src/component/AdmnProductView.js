import React from 'react'
import product_card from '../data/product_data';
import Button from 'react-bootstrap/Button'
//import { useState } from 'react';
import AddModal from './proAddModal';
import AModal from './proEditModal';
import axios from "axios";
import {useState, useEffect } from "react";
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ModleDelete1 from "./ProductModalDelete";
import ProductStock from './ProductStock';
import proSearchBar from './proSearchBar';
// import PsModal from './PsModal';
    
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
          });
        // console.log(product_card);
        // const listItems = product_card.map((item)=>
        //    <div className="item" key="{item.id}">
        //        <div className="card_img" >
        //            <img src={item.thumb}/>
        //        </div>
        //        <div className="item_header">
        //            <h2>{item.product_name}</h2>
        //            <h2>{item.weight}</h2>
        //            <p className="price"><span>{item.currency}</span>{item.price}</p>

              console.log(product_card);
         const listItems = Products.map((Product)=>
            <div className="item" key="{Product._id}">
                <div className="card_img" >
                    {/* <img src={Product.thumb}/> */}
                    <img src="./images/1.jpg"/>
               </div>
               <div className="item_header">
                    <h2>{Product.Name}</h2>
                   <h2>{Product.weight}<span>{Product.currency="g"}</span></h2>
                   <p className="price"><span>{Product.currency="Rs"}</span>{Product.price}</p>


                  
                   <Button className="btn3" style={{margin:"30px 10px 4px 3px"}} variant="warning" onClick={() =>{ setModalShow1(true);
                    setProductDet(Product);}}><FaPencilAlt/>&nbsp;&nbsp;Edit</Button>
                    <Button className="btn3" style={{margin:"0px 10px 4px 3px"}} variant="danger"onClick={() => {
                        setModaldelete1(true);
                        setdeleteProduct(Product);
                      }}><FaTrash/>&nbsp;&nbsp;Delete</Button>  
                   {/* <span>
                    <FaPencilAlt
                      onClick={() => {
                        setModalShow1(true);
                        setSupplierDet(Product);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Supplier"
                    />
                  </span> */}
                 
                   {/* <span>
                   <FaTrash
                      onClick={() => {
                        setModaldelete1(true);
                        setdeleteProduct(Product);
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                      title="Delete Product "
                    />
                 
                  </span> */}

               </div>

           </div>

        )
        const [modalShow, setModalShow] = useState(false);
        const [modalShow1, setModalShow1] = useState(false);
        const [modalShow2, setModalShow2] = useState(false);
        return (
        <Router><div style={{ marginLeft: "180px", marginTop: "20px", marginRight: "5px"}}>
                <Route path='/' exact render ={(props) =>(
            
            <div> 
                <h1>PRODUCTS</h1>
<hr></hr><div>
           {/* <AModal show = {modalShow1} onHide = {() => setModalShow1(false)} /> */}
            
            <Button className="btn" variant="primary" onClick={() => setModalShow(true)}>ADD PRODUCT</Button>
            <AddModal show = {modalShow} onHide = {() => setModalShow(false)} />
            
                                {/* <div>
                                <Button className="btn2" onClick={() => {props.history.push('/ProductStock');}}>Prodct Stock</Button>
                                </div> */}

            
                    <>
                       
                        
                       
                       {/* <Link to="/ProductStock">Product stock</Link> */}
                       
                    </>

               
            
             </div>
             
            
            
            <div className="main_content">
                  
                 
                 
                {listItems} 
            </div></div> 
            
                  )}/> 
                <Route path="/ProductStock" component={ProductStock} />
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
         </Router>
        )
    }
    
    export default MainContent2
    


