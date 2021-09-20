import React from "react";
import Table from "react-bootstrap/Table";
import Search from "./CusSearch";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidenavbar from './CusSidenavbar'

const CusTable = ({ CustomerID, customer, onClick }) => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    const getCustomers = () => {
      axios
        .get("http://localhost:5000/customer")
        .then((res) => {
          setCustomer(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getCustomers();
  });

  return (
    <div
      className="custable"
      style={{ marginLeft: "220px", marginRight: "10px" }}
    >
      <br />
      <h3>Customer Details </h3>
      <br />
      <Sidenavbar />
      <Search />
      <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Customer ID</th> */}
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Contact No.</th>
            <th>NIC</th>
            <th>Address</th>
          </tr>
        </thead>

        {customers.map((customer) => (
          <tbody key={customer._id}>
            <tr>
              {/* <td>{customer.CustomerID}</td> */}
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.contactNo}</td>
              <td>{customer.NIC}</td>
              <td>{customer.address}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default CusTable;
