import Table from "react-bootstrap/Table";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import DailySupplyBtn from "./DailySupply_Btn";
import { useState } from "react";
import ModleDaily from "./ModleDaily";

const DailySupplyTable = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <DailySupplyBtn onclick={() => setModalShow(true)} />
      <ModleDaily show={modalShow} onHide={() => setModalShow(false)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Delivered Vehicle</th>
            <th>Data Entry Officer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S001</td>
            <td>2021-08-21</td>
            <td>50</td>
            <td>LY-3654</td>
            <td>DE002</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Record"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Record"
                  />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>S001</td>
            <td>2021-08-21</td>
            <td>50</td>
            <td>LY-3654</td>
            <td>DE002</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Record"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Record"
                  />
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>S001</td>
            <td>2021-08-21</td>
            <td>50</td>
            <td>LY-3654</td>
            <td>DE002</td>
            <td>
              <div>
                <span>
                  <FaPencilAlt
                    onClick={() => console.log("Edit")}
                    style={{ cursor: "pointer" }}
                    title="Edit Record"
                  />
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <FaTrash
                    onClick={() => console.log("Delete")}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Delete Record"
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

export default DailySupplyTable;
