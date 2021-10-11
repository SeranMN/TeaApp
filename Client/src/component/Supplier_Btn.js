import React from 'react'
import Button from 'react-bootstrap/Button'
import { FaUserPlus } from 'react-icons/fa';

const SupplierBtn = ({ onclick }) => {
    return (
        <Button style={{marginLeft: "80%"}} variant="success" onClick={onclick}><FaUserPlus/>&nbsp;&nbsp;Add New Supplier</Button>
      
    );
};

export default SupplierBtn