import Table from "react-bootstrap/Table";
import {FaFileAlt,FaPencilAlt,FaTrash,} from "react-icons/fa";
import SupplierBtn from "./Supplier_Btn";
import { useState } from "react";
import Modal from "./Modle";

const SuppliersTable = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <SupplierBtn onclick={() => setModalShow(true)} />
          <Modal show={modalShow} onHide={() => setModalShow(false)} />
          
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>NIC</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S001</td>
            <td>Dishan Abeywickrama</td>
            <td>Temple Road, Morawaka</td>
            <td>991234567V</td>
            <td>0715566987</td>
            <td>dishanabey@gmail.com</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaFileAlt
                    onClick={() => console.log("Genarate")}
                    style={{ cursor: "pointer", color: "green" }}
                    title="Generate Report"
                  />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>S001</td>
            <td>Dishan Abeywickrama</td>
            <td>Temple Road, Morawaka</td>
            <td>991234567V</td>
            <td>0715566987</td>
            <td>dishanabey@gmail.com</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaFileAlt
                    onClick={() => console.log("Genarate")}
                    style={{ cursor: "pointer", color: "green" }}
                    title="Generate Report"
                  />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>S001</td>
            <td>Dishan Abeywickrama</td>
            <td>Temple Road, Morawaka</td>
            <td>991234567V</td>
            <td>0715566987</td>
            <td>dishanabey@gmail.com</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Supplier"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaFileAlt
                    onClick={() => console.log("Genarate")}
                    style={{ cursor: "pointer", color: "green" }}
                    title="Generate Report"
                  />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SuppliersTable;
