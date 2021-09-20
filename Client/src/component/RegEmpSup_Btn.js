import React from 'react'
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ModleRegEmpSup from './ModleRegEmpSup';

const RegEmpSupBtn = () => {
    const [showModal, setShowModal] = useState(false);
    return (
      <div>
        <Button variant="success" onClick={() => setShowModal(true)}>
          Register New Employee or Supplier
        </Button>
        <ModleRegEmpSup show={showModal} onHide={() => setShowModal(false)} />
      </div>
    );
}

export default RegEmpSupBtn
