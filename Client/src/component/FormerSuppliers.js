import React from 'react'
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import SideNavBar from './SupSideNavBar';
import axios from 'axios';

const FormerSuppliers = ({SupplierID, formersupplier, onClick}) => {
  const [formersuppliers, setFormerSupplier] = useState([]);
  
  useEffect(() => {
    const getFormerSuppliers = () => {
      axios
        .get("http://localhost:5000/formersupplier")
        .then((res) => {
          setFormerSupplier(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getFormerSuppliers();
  });

  return (
      <>
      <SideNavBar/>
      <div
        style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px" }}
      >
        <h1>
          <i>
            <u>Former Suppliers</u>
          </i>
        </h1>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>SupplierID</th> */}
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          {formersuppliers.map((formersupplier) => (
            <tbody key={formersupplier._id}>
              <tr>
                {/* <td>{formersupplier.SupplierID}</td> */}
                <td>{formersupplier.name}</td>
                <td>{formersupplier.address}</td>
                <td>{formersupplier.mobile}</td>
                <td>{formersupplier.email}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      </>
    );
}

export default FormerSuppliers
