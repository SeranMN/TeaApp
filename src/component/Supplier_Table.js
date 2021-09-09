import Table from "react-bootstrap/Table";
import {FaPencilAlt,FaTrash,} from "react-icons/fa";
import { useState } from "react";
import ModleSupplier from "./ModleSupplier";
import ModleDelete from "./ModleDelete";


const SuppliersTable = ({ SupplierID, supplier, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [suppliers, setSupplier] = useState([
    {
      SupplierID: "S001",
      Name: "Dishan Abeywickrama",
      Home: "Samanala",
      Street: "Temple Road",
      City: "Morawaka",
      NIC: "991234567V",
      Mobile: "0712345678",
      Email: "dishanabey@gmail.com",
    },

    {
      SupplierID: "S002",
      Name: "Chathumi De Silva",
      Home: "Isuru",
      Street: "Pitabeddara Road",
      City: "Porathota",
      NIC: "991235567V",
      Mobile: "0715345678",
      Email: "chathumi@gmail.com",
    },

    {
      SupplierID: "S003",
      Name: "Seran Wijesinghe",
      Home: "Salika",
      Street: "Galle Road",
      City: "Neluwa",
      NIC: "991234867V",
      Mobile: "0712347678",
      Email: "seranmn@gmail.com",
    },
  ]);
  const [supplierDet, setSupplierDet] = useState('')
  const [supplierDelete, setSupplierDelete] = useState('')
  //console.log(supplier)
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SupplierID</th>
            <th>Name</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {suppliers.map((supplier) => (
          <tbody key={supplier.SupplierID}>
            <tr>
              <td>{supplier.SupplierID}</td>
              <td>{supplier.Name}</td>
              <td>
                {supplier.Home},{supplier.Street},{supplier.City}
              </td>
              <td>{supplier.NIC}</td>
              <td>{supplier.Mobile}</td>
              <td>{supplier.Email}</td>
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
                        setSupplierDelete(supplier.SupplierID);
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
        supplierDelete={supplierDelete}
      />
    </div>
  );
};

export default SuppliersTable;
