import Table from "react-bootstrap/Table";
import Modle from "./EmpModle";
import { MdDelete } from "react-icons/md"
import { MdAccountCircle } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { useState,useEffect } from "react";

import axios from "axios";
const EmployeeTable = ({ employees }) => {
  
  const [showModle, setShowMoodle] = useState(false)
  const [empDet,setEmpDet] = useState ('')
  const [editForm, showEditForm] = useState(false);
  const [type, settype] = useState("")
  
  return (
    <div style={{ margin:"20px"}}>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>empID</th>
            
            <th>Name</th>
          
          
            <th>Designation</th>
       
          </tr>
        </thead>
         {employees.map((employee) => (
         <tbody key = {employee._ID}>
          <tr>
           
             
           
            <td>{employee.name }</td>
            
        
            <td>{employee.type}</td>
           
               <td><MdAccountCircle onClick={() => {
                 showEditForm(true)
                 setEmpDet(employee)
                  settype("Details")
               }} style={{ cursor: 'pointer' }} /> {'  '}
                 <MdCreate fontSize="large" onClick={() => {
                 showEditForm(true)
                   setEmpDet(employee)
                   settype("Update")
               }} style={{ cursor: 'pointer' }}></MdCreate>
              
              {' '}
                 <MdDelete style color="red" onClick={() => {
                   showEditForm(true)
                   setEmpDet(employee)
                   settype("Delete")
                 } }
                style={{ cursor: 'pointer' }} />
             
            </td>
          </tr> 
         
        </tbody> ))}
      </Table>
      {/* <EmpprofMoodle show={showModle} onHide={() => setShowMoodle(false)} employee={empDet} /> */}
      <Modle show={editForm} onHide={() => showEditForm(false)} employee = {empDet} type = {type} />
      
    </div>
  );
};

export default EmployeeTable;
