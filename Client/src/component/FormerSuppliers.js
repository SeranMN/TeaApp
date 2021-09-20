import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import SideNavBar from './SupSideNavBar';

const FormerSuppliers = ({SupplierID, formersupplier, onClick}) => {
    const [formersuppliers, setFormerSupplier] = useState([
      {
        SupplierID: "S001",
        Name: "Dishan Abeywickrama",
        Home: "Samanala",
        Street: "Temple Road",
        City: "Morawaka",
        Mobile: "0712345678",
        Email: "dishanabey@gmail.com",
      },

      {
        SupplierID: "S002",
        Name: "Chathumi De Silva",
        Home: "Isuru",
        Street: "Pitabeddara Road",
        City: "Porathota",
        Mobile: "0715345678",
        Email: "chathumi@gmail.com",
      },

      {
        SupplierID: "S003",
        Name: "Seran Wijesinghe",
        Home: "Salika",
        Street: "Galle Road",
        City: "Neluwa",
        Mobile: "0712347678",
        Email: "seranmn@gmail.com",
      },
    ]);
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
              <th>SupplierID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          {formersuppliers.map((formersupplier) => (
            <tbody key={formersupplier.SupplierID}>
              <tr>
                <td>{formersupplier.SupplierID}</td>
                <td>{formersupplier.Name}</td>
                <td>
                  {formersupplier.Home},{formersupplier.Street},
                  {formersupplier.City}
                </td>
                <td>{formersupplier.Mobile}</td>
                <td>{formersupplier.Email}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      </>
    );
}

export default FormerSuppliers
