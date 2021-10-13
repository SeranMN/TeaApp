
import React from 'react'
import product_card from '../data/product_data';
import axios from "axios";
import {useState, useEffect } from "react";
import {TiShoppingCart} from "react-icons/ti";
import Button from 'react-bootstrap/Button'
import './productc.css'
import PlaceOrder from './PlaceOrder';
import Header from './Header';
import Footer from './Footer';

// import Button from './Button'
    
     const MainContent = () => {
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
        //            <div className="btn">Add to cart</div>
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
       
        
        return (
          <>
            <div
              style={{
                backgroundImage: `url("https://cdn.luxe.digital/media/2020/06/27103947/best-premium-tea-brands-luxe-digital.jpg")`,

                //  height: "200vh",

                backgroundSize: "cover",
              }}
            >
              <div>
                <Header />
                <h1>Products</h1>
                <hr></hr>

                <div className="main_content">
                  {Products.map((Product) => (
                    <div className="item" key="{Product._id}">
                      <div className="card_img">
                        <img className="imagee" src="./images/1.jpg" />
                      </div>
                      <div className="item_header">
                        <h2>{Product.Name}</h2>
                        <h2>
                          {Product.weight}
                          <span>{(Product.currency = "g")}</span>
                        </h2>
                        <p className="price">
                          <span>{(Product.currency = "Rs")}</span>
                          {Product.price}
                        </p>
                        {/* <div className="btn1" ><TiShoppingCart/></div> */}

                        <PlaceOrder Products={Products} product={Product} />
                      </div>
                    </div>
                  ))}
                </div>
                <Footer />
              </div>
            </div>{" "}
          </>
        );
    }
    
    export default MainContent
