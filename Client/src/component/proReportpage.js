import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Navbar from './ProductSidenavbar';
import {useState, useEffect } from "react";
import axios from 'axios';
import './productc.css'
import MaterialTable from 'material-table'
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const Reportpage = () => {

    const [ProductStocks, setProductStock] = useState([]);

    useEffect(() => {
        const getProductStocks = () => {
          axios
            .get("http://localhost:5000/productStock")
            .then((res) => {
              setProductStock(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getProductStocks();
      });

  
    const columns = [
      { title: "ProductID", field: "ProductID", },
      { title: "Quantity", field: "Quantity", },
      { title: "Date", field: "Date", }
     ]
  

    const downloadPdf = () => {
      const doc = new jsPDF()
      doc.text("Product Stock Details", 20, 10)
      doc.autoTable({
        theme: "grid",
        columns: columns.map(col => ({ ...col, dataKey: col.field })),
        body: ProductStocks
      })
      doc.save('table.pdf')
    }
    return (
        <div><Navbar/>
            <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

                <h3 align="center">PRODUCT REPORT</h3>
                <hr></hr>
                <MaterialTable
                   title="Product Stock Details"
                   columns={columns}
                   data={ProductStocks}
                   options={{
                      paging:false}}
                   actions={[
                       {
                         icon: () => <PrintIcon />,
                         tooltip: "Export to Pdf",
                         onClick: () => downloadPdf(),
                         isFreeAction: true
                       }
                    ]}
                />
            </div>

        </div>
    )
}

export default Reportpage
