import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users, setUsers] = useState ([
        {id: "LY 3010", vtype:"Lorry", vmodel:"Prime mover", ftype:"Diesel", owner:"chaminda" },
        {id: "LM 5503", vtype:"Truck", vmodel:"Mahindra", ftype:"Diesel" , owner:"kasun" },
        {id: "CFK 7010", vtype:"Car", vmodel:"Honda", ftype:"Petrol" , owner:"sandun" }

    ]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

