import React from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import ModleReport from "./ModleReport";
import SearchBar from "./SearchBar";

const ReportTable = ({ SupplierID, invoice, onClick }) => {
  const [modalreport, setModalReport] = useState(false);
  const [invoiceData, setInvoiceData] = useState([
    {
      SupplierID: "S001",
      Total: 500,
    },

    {
      SupplierID: "S002",
      Total: 1500,
    },

    {
      SupplierID: "S003",
      Total: 3210,
    },
  ]);
  const [supplierreport, setSupplierReport] = useState("");
  return (
    <div
      style={{ marginLeft: "420px", marginTop: "20px", marginRight: "220px" }}
    >
      <h1>
        <i>
          <u>Generate Monthly Invoices</u>
        </i>
      </h1>
      <br />
      <SearchBar/>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SupplierID</th>
            <th>Total Weight</th>
            <th>Monthly Invoice</th>
          </tr>
        </thead>
        {invoiceData.map((invoice) => (
          <tbody key={invoice.SupplierID}>
            <tr>
              <td>{invoice.SupplierID}</td>
              <td>{invoice.Total}</td>
              <td>
                <div>
                  <span>
                    <FaFileAlt
                      onClick={() => {
                        setModalReport(true);
                        setSupplierReport(invoice.SupplierID);
                      }}
                      style={{ cursor: "pointer", color: "green" }}
                      title="Generate Monthly Invoice"
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <ModleReport
        show={modalreport}
        onHide={() => setModalReport(false)}
        supplierreport={supplierreport}
      />
    </div>
  );
};

export default ReportTable;
