import Table from "react-bootstrap/Table";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useState } from "react";
import ModleDaily from "./SupModleDaily";
import ModleDelete from "./SupModleDelete";

const DailySupplyTable = ({ SupplierID, dailySupply, onClick }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false)
  const [dailysuplies, setDailySuply] = useState([
    {
      SupplierID: "S001",
      Date: "2021-08-21",
      Weight: "50",
      DeliveredVehicle: "LY-3654",
      DataEntryOfficer: "DE002",
    },

    {
      SupplierID: "S002",
      Date: "2021-08-21",
      Weight: "150",
      DeliveredVehicle: "LA-8546",
      DataEntryOfficer: "DE002",
    },

    {
      SupplierID: "S003",
      Date: "2021-08-21",
      Weight: "80",
      DeliveredVehicle: "LY-3654",
      DataEntryOfficer: "DE001",
    },
  ]);
  const [dailysupplyDet, setDailySupplyDet] = useState('')
  const [dailysupplyDelete, setDailySupplyDelete] = useState('')
  //console.log(dailySupply)
  return (
    <div>
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
          <tbody key={dailySupply.SupplierID}>
            <tr>
              <td>{dailySupply.SupplierID}</td>
              <td>{dailySupply.Date}</td>
              <td>{dailySupply.Weight}</td>
              <td>{dailySupply.DeliveredVehicle}</td>
              <td>{dailySupply.DataEntryOfficer}</td>
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
                      onClick={() => { setModalDelete(true); setDailySupplyDelete(dailySupply) }}
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
      <ModleDelete show={modaldelete}
        onHide={() => setModalDelete(false)}
        dailysupplyDelete={dailysupplyDelete}/>
      
    </div>
  );
};

export default DailySupplyTable;
