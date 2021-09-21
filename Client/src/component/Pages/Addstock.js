import React,{useState} from 'react'
import Addstockmodel from './Addstockmodel';
import Card1 from './Card1';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbarnavod';
import { flexbox } from '@mui/system';

    
  const Addstock = ({}) => {
        
    

     

       
    return (

        <>
            <Navbar/>
           
              <div style={{color:"black",fontWeight:"bold",marginTop:"30px",marginLeft:"200px",fontSize:"20px"}}> Stock details</div>
            <Addstockmodel />
             <Card1 />
           
                    
                        
        </>
    )
}
 

export default Addstock
