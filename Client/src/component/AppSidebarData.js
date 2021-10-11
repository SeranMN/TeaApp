import React from 'react'
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { AiFillSchedule } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";

export const SidebarData = [
    
    {
        title:'Pending',
        path:'/PendingTable.js',
        icon:<AiFillQuestionCircle/>,
        cName:'nav-text'
    },
    {
        title:'Approved',
        path:'./ApprTable.js',
        icon:<AiFillSchedule/>,
        cName:'nav-text'
    },
    
    
    ];