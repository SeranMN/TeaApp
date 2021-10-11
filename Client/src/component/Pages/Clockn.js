import React from 'react'
import { useState } from 'react';
import Card from '@material-ui/core/Card';

const Clockn = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const [Ctime, setCtime] = useState(time);
    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);
    return (
   <>
            
        <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"70px",marginTop:"40px"}}>
           <Card style={{color:'black',backgroundColor:"#42f5a4"}}>
                <h1>{time}</h1>
            </Card>
            
            
            
            <Card style={{color:'black',backgroundColor:"#42f5a4"}}>
                <h1>{date}</h1>
            </Card>
            
        </div>
     </>   
           
           
    )
}

export default Clockn