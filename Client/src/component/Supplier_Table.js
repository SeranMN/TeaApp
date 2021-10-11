import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaPencilAlt, FaTrash, } from "react-icons/fa";
import PrintIcon from "@material-ui/icons/Print";
import { useState, useEffect } from "react";
import ModleSupplier from "./ModleSupplier";
import ModleDelete from "./SupModleDelete";
import SupplierProfileSideBar from "./SupplierProfile_SideBar";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";


const SuppliersTable = ({ SupplierID, supplier, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [suppliers, setSupplier] = useState([]);
  const [supplierDet, setSupplierDet] = useState('')
  const [supplierdelete, setSupplierDelete] = useState('')

  const columns = [
    { title: "Name", field: "name" },
    { title: "Address", field: "address" },
    { title: "NIC", field: "nic" },
    { title: "Mobile", field: "mobile" },
    { title: "Email", field: "email" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("All Suppliers", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: suppliers,
    });
    doc.save("Suppliers.pdf");
  };

  useEffect(() => {
    const getSuppliers = () => {
      axios
        .get("http://localhost:5000/supplier")
        .then((res) => {
          setSupplier(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSuppliers();
  }, []);
  
  return (
    <>
      <Button variant="outline-primary" onClick={() => downloadPdf()}><PrintIcon/>&nbsp;&nbsp; Generate Report </Button>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {suppliers.map((supplier) => (
          <tbody key={supplier._id}>
            <tr>
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.nic}</td>
              <td>{supplier.mobile}</td>
              <td>{supplier.email}</td>
              <td>
                <div>
                  <span>
                    <FaPencilAlt
                      onClick={() => {
                        setModalShow(true);
                        setSupplierDet(supplier);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Supplier"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <FaTrash
                      onClick={() => {
                        setModalDelete(true);
                        setSupplierDelete(supplier);
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                      title="Delete Supplier"
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <ModleSupplier
        show={modalShow}
        onHide={() => setModalShow(false)}
        supplierDet={supplierDet}
      />
      <ModleDelete
        show={modaldelete}
        onHide={() => setModalDelete(false)}
        supplierdelete={supplierdelete}
      />
      {/* <SupplierProfileSideBar
        supplierDet={supplierDet}
      /> */}
      </div>
      </>
  );
};

export default SuppliersTable;
