import React from 'react'
import SupplierProfileSideBar from './SupplierProfile_SideBar'
import SupplierProfileTable from './SupplierProfile_Table'

const SupplierProfile = () => {
    return (
      <div className="profComo">
        <SupplierProfileSideBar />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <SupplierProfileTable />
      </div>
    );
}

export default SupplierProfile
