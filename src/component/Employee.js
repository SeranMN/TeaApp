import React from 'react'
import Empbtn from "./Empbtn";
import { useState } from "react";
import Modle from "./Modle";
import EmployeeDetails from './EmployeeDetails';
const Employee = () => {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div>
        <Empbtn onClick={() => setModalShow(true)} /><br/>
            <Modle show={modalShow} onHide={() => setModalShow(false)} />
            
            <EmployeeDetails />
            
        </div>
    )
}

export default Employee
