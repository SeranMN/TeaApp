import React from "react";
import { useState } from "react";
import EmployeeTable from "./EmployeeTable";

const EmployeeDetails = ({ onClick, tot }) => {
  const [employees, setEmployee] = useState([
    {
      empID: "EM20156",
      nic: "857896545V",
      Name: "Shamali Perera",
      Address: "Matara",
      Email: "shamaliperera@gmail.com",
      Des: "Data Entry Operator",
      Salary: 50000,
      Date: "20/08/2017",
      Type: 1,
    },
    {
      empID: "EM20157",
      nic: "857896545V",
      Name: "Navod Gamage",
      Address: "Matara",
      Email: "shamaliperera@gmail.com",
      Des: "General Manager",
      Salary: 50000,
        Date: "20/08/2017",
      Type:2,
    },
    {
      empID: "EM20158",
      nic: "857896545V",
      Name: "Dishan Abeywikrama",
      Address: "Matara",
      Email: "shamaliperera@gmail.com",
      Des: "Supliar Manager",
      Salary: 50000,
        Date: "20 / 08 / 2017",
      Type:3,
    },
  ]);
  console.log("DET");

  return (
    <>
      <EmployeeTable employees={employees} totEmp={tot} />
    </>
  );
};

export default EmployeeDetails;
