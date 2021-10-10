import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidenavbar from './CusSidenavbar'
import MaterialTable from "material-table";
import PrintIcon from "@material-ui/icons/Print";
import Clear from "@material-ui/icons/Clear";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CusTable = ({ CustomerID, customer, onClick }) => {
  const [customers, setCustomer] = useState([]);

  const columns = [
    { title: "Customer ID", field: "_id", },
    { title: "First Name", field: "firstName", },
    { title: "Last Name", field: "lastName", },
    { title: "E-mail", field: "email", },
    { title: "Contact No.", field: "contactNo", },
    { title: "NIC", field: "NIC", },
    { title: "Address", field: "address", },]
  
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Customer Details", 70, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: customers,
    });
    doc.save("TeaFactory_Customers.pdf");
  };

  useEffect(() => {
    const getCustomers = () => {
      axios
        .get("http://localhost:5000/customer")
        .then((res) => {
          setCustomer(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getCustomers();
  },[]);

  

  return (
    <div>
      <Sidenavbar />
    <div
      className="custable"
      style={{ marginLeft: "220px", marginRight: "10px" }}
    >
      <br />
      <h3>Customer Details </h3>
      
      <br />
      <MaterialTable
          title="Customers"
          columns={columns}
          data={customers}
          options={{
            headerStyle: { backgroundColor: "#060b26", color: "white" },            
          }}
          actions={[
            {
              icon: () => <PrintIcon />, 
              tooltip: "Generate Report",
              onClick: () => downloadPdf(),
              isFreeAction: true,
            },
          ]}
        />

      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer ID</th>
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
              <td>{customer.CustomerID}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.contactNo}</td>
              <td>{customer.NIC}</td>
              <td>{customer.address}</td>
            </tr>
          </tbody>
        ))}
      </Table> */}
    </div>
    </div>
  );
};

export default CusTable;
