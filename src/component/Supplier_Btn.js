import React from 'react'
import Button from 'react-bootstrap/Button'

const SupplierBtn = ({ onclick }) => {
    return (
        <Button variant="success" onClick={onclick}>Add New Supplier</Button>
        
    )
}

export default SupplierBtn