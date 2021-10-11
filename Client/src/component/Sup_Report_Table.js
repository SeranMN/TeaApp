import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { FaFileAlt } from "react-icons/fa";
import SideNavBar from "./SupSideNavBar";
import MaterialTable from "material-table";
import PrintIcon from "@material-ui/icons/Print";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

const ReportTable = ({ SupplierID, invoice, onClick }) => {
  const reportData = [
    {
      supID: "200032001614",
      month: "September",
      weight: 500,
    },

    {
      supID: "650944070V",
      month: "September",
      weight: 1500,
    },

    {
      supID: "196551610054",
      month: "September",
      weight: 3210,
    },

    {
      supID: "966044504V",
      month: "September",
      weight: 2280,
    },
    {
      supID: "200032001614",
      month: "October",
      weight: 2500,
    },

    {
      supID: "650944070V",
      month: "October",
      weight: 1000,
    },

    {
      supID: "196551610054",
      month: "October",
      weight: 1110,
    },

    {
      supID: "966044504V",
      month: "October",
      weight: 1720,
    },
  ];
  const columns = [
    { title: "Supplier ID", field: "supID", },
    { title: "Month", field: "month", },
    { title: "Total Weight", field: "weight", },]
  
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Total Supplies by Suppliers", 70, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: reportData,
    });
    doc.save("Supply.pdf");
  };
  
  // const [invoiceData, setInvoiceData] = useState([]);

  //  useEffect(() => {
  //    const getInvoice = () => {
  //      axios
  //        .get("http://localhost:5000/dailysupply")
  //        .then((res) => {
  //          setInvoiceData(res.data);
  //          console.log(res.data);
  //        })
  //        .catch((err) => {
  //          alert(err.msg);
  //        });
  //    };
  //    getInvoice();
  //  });

  return (
    <>
      <SideNavBar />
      <div
        style={{ marginLeft: "420px", marginTop: "20px", marginRight: "220px" }}
      >
        <h1>
          <i>
            <u>Total Supplies by Suppliers</u>
          </i>
        </h1>
        <br />
        <br />
        <MaterialTable
          title="Monthly Totals"
          columns={columns}
          data={reportData}
          options={{
            headerStyle: { backgroundColor: "#060b26", color: "white" },
          }}
          actions={[
            {
              icon: () => (
                <Button variant="outline-primary">
                  {" "}
                  Generate Report &nbsp;
                  <PrintIcon />
                </Button>
              ), // you can pass icon too
              tooltip: "Export to Pdf",
              onClick: () => downloadPdf(),
              isFreeAction: true,
            },
          ]}
        />

        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>SupplierID</th>
              <th>Month</th>
              <th>Total Weight</th>
              <th>Monthly Invoice</th>
            </tr>
          </thead>
          {invoiceData.map((invoice) => (
            <tbody key={invoice.supID}>
              <tr>
                <td>{invoice.supID}</td>
                <td>{invoice.month}</td>
                <td>{invoice.weight}</td>
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
        /> */}
      </div>
    </>
  );
};

export default ReportTable;
