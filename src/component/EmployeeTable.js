import Table from "react-bootstrap/Table";
import Modle from "./Modle";
import { MdDelete } from "react-icons/md"
import { MdCreate } from "react-icons/md"
import { useState } from "react";

const EmployeeTable = ({empID,employee,onClick}) => {
  const[showModle,setShowMoodle] = useState(false)
  console.log(employee)
  return (
    <div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>empID</th>
            <th>NIC</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        
         <tbody>
          <tr>
            <td>{empID}</td>
            <td>{employee.nic}</td>
            <td>{employee.Name }</td>
            <td>{employee.Address }</td>
            <td>{employee.Email}</td>
            <td>{employee.Des}</td>
            <td>{employee.Salary }</td>
            <td><MdCreate onClick={() => setShowMoodle(true)} style={{ cursor: 'pointer' }} />
              <Modle show={showModle} onHide={() => setShowMoodle(false)} empDet={employee} />
              {' '}
              <MdDelete style color="red" onClick={() => console.log("Delete Icon")}
                style={{ cursor: 'pointer' }} />
             
            </td>
          </tr>
        
        </tbody> 
      </Table>
    </div>
  );
};

export default EmployeeTable;
