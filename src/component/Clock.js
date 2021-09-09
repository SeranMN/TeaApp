import React from 'react'
import { useState } from 'react';
import { Card,Col,Row } from 'react-bootstrap';
const Clock = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const [Ctime, setCtime] = useState(time);
    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);
    return (
        
        <Row>
            
            <Col xs = {6}>
           <Card bg = "success" text =  'white'>
                <h1>{time}</h1>
            </Card>
            </Col>
            
            <Col xs= {6}>
            <Card bg = "success" text =  'white'>
                <h1>{date}</h1>
                </Card>
                </Col>
            
            </Row>
           
    )
}

export default Clock
