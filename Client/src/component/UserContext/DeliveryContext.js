import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const DeliveryContext = createContext();

export const UserProvider = (props) =>{
    const [users, setUsers] = useState ([
        {id: "LY 3010", name:"Lorryyyy", position:"Prime mover", salary:"Diesel", distance:"chaminda", driver:"hk" },
        {id: "LM 5503", name:"Truck", position:"Mahindra", salary:"Diesel" , distance:"kasun" , driver:"SD"},
        {id: "CFK 7010", name:"Car", position:"Honda", salary:"Petrol" , distance:"sandun", driver:"Ak" }

    ]);

    return(
        <DeliveryContext.Provider value={[users,setUsers]}>
            {props.children}
        </DeliveryContext.Provider>
    );
};

