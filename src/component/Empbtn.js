import React from "react";
import Button from "react-bootstrap/Button";

const Empbtn = ({ onClick }) => {
  return (
    <Button variant="success" onClick={onClick}>
      ADD EMPLOYEE
    </Button>
  );
};

export default Empbtn;
