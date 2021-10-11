import Table from "react-bootstrap/Table";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModleDaily from "./SupModleDaily";
import ModleDelete from "./SupModleDelete";
import axios from "axios";

const DailySupplyTable = ({ SupplierID, dailySupply, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false)
  const [dailysuplies, setDailySuply] = useState([]);
  const [dailysupplyDet, setDailySupplyDet] = useState('')
  const [dailysupplydelete, setDailySupplyDelete] = useState('')

  useEffect(() => {
    const getSupplies = () => {
      axios
        .get("http://localhost:5000/dailysupply")
        .then((res) => {
          setDailySuply(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSupplies();
  });

  return (
    <div
      style={{ marginLeft: "220px", marginRight: "220px" }}
    >
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
        {dailysuplies.map((dailySupply) => (
          <tbody key={dailySupply._id}>
            <tr>
              <td>{dailySupply.supID}</td>
              <td>{new Date(dailySupply.date).toDateString()}</td>
              <td>{dailySupply.weight}</td>
              <td>{dailySupply.vehicle}</td>
              <td>{dailySupply.deo}</td>
              <td>
                <div>
                  <span>
                    <FaPencilAlt
                      onClick={() => {
                        setModalShow(true);
                        setDailySupplyDet(dailySupply);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Record"
                    />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    <FaTrash
                      onClick={() => {
                        setModalDelete(true);
                        setDailySupplyDelete(dailySupply);
                      }}
                      style={{ cursor: "pointer", color: "red" }}
                      title="Delete Record"
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <ModleDaily
        show={modalShow}
        onHide={() => setModalShow(false)}
        supplyDet={dailysupplyDet}
      />
      <ModleDelete
        show={modaldelete}
        onHide={() => setModalDelete(false)}
        dailysupplydelete={dailysupplydelete}
      />
    </div>
  );
};

export default DailySupplyTable;
