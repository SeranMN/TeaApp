import React from 'react';
import { FaBars, FaCalendarCheck, FaCoffee, FaIdCard } from "react-icons/fa";
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
    title:'Feedbacks',
    path:'/FeedbackAdmin.js',
    icon:<FaCoffee/>,
    cName:'nav-text'
},
{
    title:'Customer Details',
    path:'./CusTable.js',
    icon:<FaIdCard/>,
    cName:'nav-text'
},
{
    title:'My Appointments',
    path:'./AppPendingTable.js',
    icon:<FaCalendarCheck/>,
    cName:'nav-text'
},



];