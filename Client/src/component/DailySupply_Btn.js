import React from "react";
import Button from "react-bootstrap/Button";

const DailySupplyBtn = ({ onclick }) => {
  return (
    <Button variant="success" onClick={onclick}>
      Add Supply
    </Button>
  );
};

export default DailySupplyBtn;
