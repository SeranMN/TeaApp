import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const VehicleContext = createContext()

const VehicleContextProvider = (props) => {

    const [employees, setVehicle] = useState([

        {id:uuidv4(), name:'Akee', email:'akee@gmail.com',address:'no 30/2', phone:'(119)'},
        {id:uuidv4(), name:'Akee1', email:'kkkakee@gmail.com',address:'no 3220/2', phone:'(10019)'},
        {id:uuidv4(), name:'Akee2', email:'akemme@gmail.com',address:'no 30/222', phone:'(12219)'}

    ]) 

    const updateVehicle = (id, updatedVehicle) => {
        setVehicle(employees.map((employee) => employee.id === id ? updatedVehicle : employee))
    }


    return (
        <VehicleContext.Provider value= {{employees, updateVehicle}}>
            {props.children}
        </VehicleContext.Provider>
    )
}

export default VehicleContextProvider;