import React from 'react'
import { useState } from 'react'
import EmployeeTable from './EmployeeTable'

const EmployeeDetails = ({ onClick }) => {
    const [employees, setEmployee] = useState([
        {
            empID: 'EM20156',
            nic:'857896545V',
            Name: 'Shamali Perera',
            Address: 'Matara',
            Email:'shamaliperera@gmail.com',
            Des:'Manager',
        Salary: 50000,
            
        },
         {
            empID: 'EM20157',
            nic:'857896545V',
            Name: 'Navod Gamage',
            Address: 'Matara',
            Email:'shamaliperera@gmail.com',
            Des:'Manager',
        Salary: 50000,
            
        },
         {
            empID: 'EM20158',
            nic:'857896545V',
            Name: 'Dishan Abeywikrama',
            Address: 'Matara',
            Email:'shamaliperera@gmail.com',
            Des:'Manager',
        Salary: 50000,
            
        }




    ])
    console.log("DET")

    return (
        <>
            {employees.map((employee) => (<EmployeeTable empID={employee.empID} employee={employee}
                
                />))
             }
            
        </>
    )
}

export default EmployeeDetails
