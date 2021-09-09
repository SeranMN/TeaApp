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
    path:'/',
    icon:<AiFillHome/>,
    cName:'nav-text'
},
{
    title:'Attendance',
    path:'/Attendance.js',
    icon:<AiFillPlusCircle/>,
    cName:'nav-text'
},
{
    title:'Salary',
    path:'./Salary.js',
    icon:<ImEnter/>,
    cName:'nav-text'
},
{
    title:'Former Employees',
    path:'/FormerEmp.js',
    icon:<ImExit/>,
    cName:'nav-text'
},



];