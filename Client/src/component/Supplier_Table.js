import Table from "react-bootstrap/Table";
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleSupplier from "./ModleSupplier";
import ModleDelete from "./SupModleDelete";
import axios from "axios";


const SuppliersTable = ({ SupplierID, supplier, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [suppliers, setSupplier] = useState([]);
  const [supplierDet, setSupplierDet] = useState('')
  const [supplierdelete, setSupplierDelete] = useState('')

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
  });
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>SupplierID</th> */}
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
              {/* <td>{supplier.SupplierID}</td> */}
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
    </div>
  );
};

export default SuppliersTable;
