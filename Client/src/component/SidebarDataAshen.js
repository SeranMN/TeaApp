import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { ImExit } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";



export const sidebarData = [
{
    title:'Dashboard',
    path:'/OrderAdmin',
    icon:<AiFillHome/>,
    cName:'nav-text'
},

{
    title:'Report',
    path:'/OrderReport',
    icon:<TiDocumentText/>,
    cName:'nav-text'
},





];