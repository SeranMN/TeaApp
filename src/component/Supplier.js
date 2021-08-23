import React from 'react';
import SupplierBtn from './Supplier_Btn';
import { useState } from 'react';
import ModleSupplier from './ModleSupplier';
import SuppliersTable from './Supplier_Table';


const Supplier = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <SupplierBtn onclick={() => setShowModal(true)} /><br />
            <ModleSupplier show={showModal} onHide={() => setShowModal(false)} />
            <SuppliersTable/>
        </div>
    )
}

export default Supplier;