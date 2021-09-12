import {React,useState} from 'react'
import Card1 from './Card1'
import Addstock from './Addstock'

const Product =() =>  {
    const[products,setproducts]=useState([
        {productID : 'pr001',
         productName:'Green tea',
         sectinNo :'A1',
         Initialamount:'12',
         Date:'2021/05/19'
        },
        {productID : 'pr002',
        productName:'black tea',
        sectinNo :'B1',
        Initialamount:'20',
        Date:'2021/05/14'
       },
       {productID : 'pr003',
       productName:'White tea',
       sectinNo :'c1',
       Initialamount:'32',
       Date:'2021/05/09'
      }
    ])

    return (
        <div>
            {products.map((product)=><Card1 key={product.productID} products={product}/>)}
            
            
        </div>
    )
}

export default Product

