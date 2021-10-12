import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImEnter } from "react-icons/im";
import { ImExit } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import HomeIcon from '@mui/icons-material/Home';

export const empsidenavbarData = [
  {
    title: "Dashboard",
    path: "/Employee.js",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "Attendance",
    path: "/Attendance.js",
    icon: <AddAlarmIcon />,
    cName: "nav-text",
  },
  {
    title: "Salary",
    path: "./Salary.js",
    icon: <AttachMoneyIcon/>,
    cName: "nav-text",
  },
  {
    title: "Former Employees",
    path: "/FormerEmp.js",
    icon: < AccessTimeFilledIcon/>,
    cName: "nav-text",
  },
];