import React from "react";
import Button from "react-bootstrap/Button";
import { FaUserPlus } from "react-icons/fa";


const DailySupplyBtn = ({ onclick }) => {
  return (
    <div
      style={{ marginLeft: "70%", marginTop: "20px" }}
    >
      <Button variant="success" onClick={onclick}><FaUserPlus/>&nbsp;
        Add Supply
      </Button>
    </div>
  );
};

export default DailySupplyBtn;
