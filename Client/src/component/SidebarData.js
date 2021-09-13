import React from 'react';
// import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { ImExit } from "react-icons/im";
// import { TiDocumentText } from "react-icons/ti";
// import { FiSettings } from "react-icons/fi";



export const sidebarData = [

{
    title:'Dashboard',
    path:'./MainContent2.js',
    icon:<AiFillHome/>,
    cName:'nav-text'
},
{
    title:'PRODUCT',
    path:'/',
    icon:<AiFillPlusCircle/>,
    cName:'nav-text'
},
{
    title:'PRODUCT STOCK',
    path:'./ProductStock.js',
    icon:<ImEnter/>,
    cName:'nav-text'
},
{
    title:'REPORT',
    path:'/Reportpage.js',
    icon:<ImExit/>,
    cName:'nav-text'
},



];