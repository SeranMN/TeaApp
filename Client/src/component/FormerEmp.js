import { useEffect, useState } from 'react'
import EmpSideNavBar from './EmpSideNavBar'
import MaterialTable from "material-table";
import axios from 'axios';
import Button  from 'react-bootstrap/Button';
import PrintIcon from "@material-ui/icons/Print";

import jsPDF from "jspdf";

import "jspdf-autotable";
const FormerEmp = () => {
    const downloadPdf = () => {

    const doc = new jsPDF();

    doc.text("Former Employees", 70, 10);

    doc.autoTable({

      theme: "striped",

      columns: columns.map((col) => ({ ...col, dataKey: col.field })),

      body: emp,

    });

    doc.save("Former Employee.pdf");

  };
    const [emp, setEmp] = useState([]);
    useEffect(() => {
        const getEmployeee =()=>{
        axios
        .get("http://localhost:5000/formerEmp/")
        .then((res) => {
          setEmp(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getEmployeee();
        
    }, [])
    const columns = [

    { title: "NIC", field: "nic", },

    { title: "Name", field: "name", },

    { title: "Reason", field: "reason", },]
    return (
        <>
         <EmpSideNavBar />
        <div style={{ marginLeft: "220px", marginTop: "20px", }}>
           
            <MaterialTable

          title="Former Employee"

          columns={columns}

          data={emp}

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
            

            </div>
            </>
    )
}

export default FormerEmp
