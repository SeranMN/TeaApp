import React from "react";
import { useState } from "react";
import DailySupplyBtn from "./DailySupply_Btn";
import ModleDaily from "./SupModleDaily";
import DailySupplyTable from "./DailySupply_Table";
import Button from "react-bootstrap/Button"
import DSSideNavBar from "./SupDSNavBar";


const DailySupply = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DSSideNavBar />
      <div
        style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px" }}
      >
        <h1>
          <i>
            <center>
              <u>All Supplies</u>
            </center>
          </i>
        </h1>

        <br />
        <DailySupplyBtn onclick={() => setShowModal(true)} />
        <br />
        <ModleDaily show={showModal} onHide={() => setShowModal(false)} />
        <DailySupplyTable />
      </div>
    </>
  );
};

export default DailySupply;
