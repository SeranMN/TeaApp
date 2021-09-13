import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users, setUsers] = useState ([
        {id: 1, name:"salmon", position:"Front End Dev", salary:"100000" },
        {id: 2, name:"Shikar", position:"Back End Dev", salary:"110000" },
        {id: 3, name:"Chahar", position:"Full stack", salary:"200000" }

    ]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

