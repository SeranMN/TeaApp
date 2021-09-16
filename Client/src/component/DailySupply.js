import React from "react";
import { useState } from "react";
import DailySupplyBtn from "./DailySupply_Btn";
import ModleDaily from "./SupModleDaily";
import DailySupplyTable from "./DailySupply_Table";


const DailySupply = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ marginTop: "20px" }}>
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
  );
};

export default DailySupply;
