import React from "react";
import { useState } from "react";
import DailySupplyBtn from "./DailySupply_Btn";
import ModleDaily from "./SupModleDaily";
import DailySupplyTable from "./DailySupply_Table";

const DailySupply = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <DailySupplyBtn onclick={() => setShowModal(true)} />
      <br />
      <ModleDaily show={showModal} onHide={() => setShowModal(false)} />
      <DailySupplyTable />
    </div>
  );
};

export default DailySupply;
