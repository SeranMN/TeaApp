import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { ImExit } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";



export const sidebarData = [
{
    title:'Dashboard',
    path:'/Dashboard',
    icon:<AiOutlineDashboard/>,
    cName:'nav-text'
},
{
    title:'Stock Details',
    path:'/Addstock',
    icon:<AiFillPlusCircle/>,
    cName:'nav-text'
},
{
    title:'In',
    path:'/In',
    icon:<ImEnter/>,
    cName:'nav-text'
},
{
    title:'Out',
    path:'/Out',
    icon:<ImExit/>,
    cName:'nav-text'
},
{
    title:'Report',
    path:'/report',
    icon:<TiDocumentText/>,
    cName:'nav-text'
},





];