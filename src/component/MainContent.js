
import React from 'react'
import product_card from '../data/product_data';
// import Button from './Button'
    
     const MainContent = () => {
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
                   <div className="btn">Add to cart</div>

               </div>

           </div>

        )
        return (
            <div className="main_content">
                 {/* <h3>Products</h3>  */}
                 
                {/* <Button onClick= {onAdd}/> */}
                {listItems} 
            </div>
        )
    }
    
    export default MainContent
    



