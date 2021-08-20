import Table from 'react-bootstrap/Table'
import Empbtn from './Empbtn'
import { useState } from 'react';
import Modle from './Modle';


const EmployeeTable = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
        <Empbtn onClick = {()=>setModalShow(true)}/>
        <Modle show ={modalShow}
        onHide={() => setModalShow(false)}/>
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
            <td>emp2015</td>
            <td>857896545V</td>
            <td>Shamali Perera</td>
            <td>Matara</td>
            <td>Shamaliperera@gmail.com</td>
            <td>Manager</td>
            <td>50000.00</td>
          </tr>
          <tr>
            <td>emp2015</td>
            <td>857896545V</td>
            <td>Shamali Perera</td>
            <td>Matara</td>
            <td>Shamaliperera@gmail.com</td>
            <td>Manager</td>
            <td>50000.00</td>
          </tr>
          <tr>
            <td>emp2015</td>
            <td>857896545V</td>
            <td>Shamali Perera</td>
            <td>Matara</td>
            <td>Shamaliperera@gmail.com</td>
            <td>Manager</td>
            <td>50000.00</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
}

export default EmployeeTable
