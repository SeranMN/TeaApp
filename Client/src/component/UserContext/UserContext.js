import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users, setUsers] = useState ([
        {id: "LY 3010", name:"Lorry", position:"Prime mover", salary:"Diesel", owner:"chaminda" },
        {id: "LM 5503", name:"Truck", position:"Mahindra", salary:"Diesel" , owner:"kasun" },
        {id: "CFK 7010", name:"Car", position:"Honda", salary:"Petrol" , owner:"sandun" }

    ]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

