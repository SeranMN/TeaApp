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
    title:'Add Stock',
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
    path:'/out',
    icon:<ImExit/>,
    cName:'nav-text'
},
{
    title:'Generate report',
    path:'/report',
    icon:<TiDocumentText/>,
    cName:'nav-text'
},

{
    title:'Settings',
    path:'/settings',
    icon:<FiSettings/>,
    cName:'nav-text'
},



];