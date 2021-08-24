import React from 'react'
import Table from 'react-bootstrap/Table'
import Search from './Search'

const CusTable = () => {
    return (
        <div className="custable">
        <br/>
        <Search /> 
        <br/>
        
       
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Contact No.</th>
                    <th>NIC</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>markotto@gmail.com</td>
                    <td>0711234567</td>
                    <td>998745869V</td>
                    <td>No.67,Flower Street,Galle</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacobt@gmail.com</td>
                    <td>0774258963</td>
                    <td>985263789V</td>
                    <td>No.92,Rose Road,Galle</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default CusTable
