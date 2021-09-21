import { useState } from "react";
import React from "react";
import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users2, setUsers2] = useState ([
        {id: "LY 3011", route:"360/2", date:"2021/02/03", tea:"170", distance:"19", driver:"Samantha" },
        {id: "LM 5503", route:"148/3", date:"2021/05/20", tea:"200" , distance:"26" , driver:"Chandana"},
        {id: "CFK 7010", route:"152", date:"2021/07/02", tea:"235" , distance:"29", driver:"Upali" }

    ]);

    return(
        <UserContext.Provider value={[users2,setUsers2]}>
            {props.children}
        </UserContext.Provider>
    );
};

