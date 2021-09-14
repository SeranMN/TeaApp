import React from 'react';
import SupplierBtn from './Supplier_Btn';
import { useState } from 'react';
import ModleSupplier from './ModleSupplier';
import SuppliersTable from './Supplier_Table';
import SideNavBar from './SideNavBar';


const Supplier = () => {
    const [showModal, setShowModal] = useState(false)

  return (
      <>
      <SideNavBar/>
      <div
        style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px" }}
      >
        <h1>
          <i>
            <u>All Suppliers</u>
          </i>
        </h1>
        <br />
        <SupplierBtn onclick={() => setShowModal(true)} />
        <br/><br/>
        <ModleSupplier show={showModal} onHide={() => setShowModal(false)} />
        <SuppliersTable />
      </div>
      </>
    );
}

export default Supplier;