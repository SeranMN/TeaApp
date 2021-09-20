import React from "react";
import { useState,useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import axios from "axios";

const EmployeeDetails = ({ onClick, tot }) => {
   const [employees, setEmployee] = useState([]);
  
  useEffect(() => {
    const getEmployeee = () => {
    
      axios.get("http://localhost:5000/employee").then((res) => {
       setEmployee(res.data)
        
      }).catch((err) => {
        alert(err.msg)
      })
    }
    getEmployeee();
  },[])

  return (
    <>
      <EmployeeTable employees={employees} totEmp={tot} />
    </>
  );
};

export default EmployeeDetails;
