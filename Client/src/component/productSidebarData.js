import React from 'react';
// import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
// import {HiDocumentReport} from "react-icons/ai";
 import { TiDocumentText } from "react-icons/ti";
// import { FiSettings } from "react-icons/fi";



export const sidebarData = [

// {
//     title:'Dashboard',
//     path:'./CusProductView.js',
//     icon:<AiFillHome/>,
//     cName:'nav-text'
// },
{
    title:'PRODUCT',
    path:'./',
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
    path:'/proReportpage.js',
    icon:<
    TiDocumentText/>,
    cName:'nav-text'
},



];