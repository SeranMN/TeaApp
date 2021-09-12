import React from 'react'
import product_card from '../data/product_data';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import AddModal from './AddModal';
import AModal from './AModal';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ProductStock from './ProductStock';
// import PsModal from './PsModal';
    
     const MainContent2 = ({props}) => {
        console.log(product_card);
        const listItems = product_card.map((item)=>
           <div className="item" key="{item.id}">
               <div className="card_img" >
                   <img src={item.thumb}/>
               </div>
               <div className="item_header">
                   <h2>{item.product_name}</h2>
                   <h2>{item.weight}</h2>
                   <p className="price"><span>{item.currency}</span>{item.price}</p>
                  
                   <Button className="btn3" style={{margin:"30px 10px 4px 3px"}} variant="warning" onClick={() => setModalShow1(true)}>Edit</Button>
                   <Button className="btn3" style={{margin:"0px 10px 4px 3px"}} variant="danger">Delete</Button> 
                   

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
           <AModal show = {modalShow1} onHide = {() => setModalShow1(false)} />
            
            <Button className="btn1" variant="primary" onClick={() => setModalShow(true)}>ADD PRODUCT</Button>
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
                </div>
         </Router>
        )
    }
    
    export default MainContent2
    


