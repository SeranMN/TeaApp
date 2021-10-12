
import React from 'react'
import product_card from '../data/product_data';
import axios from "axios";
import {useState, useEffect } from "react";
import {TiShoppingCart} from "react-icons/ti";
import Button from 'react-bootstrap/Button'
import './productc.css'
import Header from './Header'
import Footer from './Footer'


    
     const MainContent = () => {
        
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

          
        console.log(product_card);
        const listItems = Products.map((Product)=>
           <div className="item" key="{Product._id}">
               <div className="card_img" >
                   <img className="imagee" src="./images/1.jpg"/>
              </div>
              <div className="item_header">
                   <h2>{Product.Name}</h2>
                   <h2>{Product.weight}<spann>{Product.currency="g"}</spann></h2>
                   <p className="price"><spann>{Product.currency="Rs"}</spann>{Product.price}</p>
                  
                  <Button className="pbtn1" style={{margin:"30px 10px 4px 3px"}} variant="warning" >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TiShoppingCart/>
                  </Button>

               </div>

           </div>

        )
        return (
         
            <div>
              <Header/>
               <h1>PRODUCTS</h1>
               <hr></hr>
            <div className="main_content">
               {listItems} 
            </div>
              <Footer/>
            </div>
        )
    }
    
    export default MainContent
    



