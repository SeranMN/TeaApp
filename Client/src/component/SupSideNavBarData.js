import React from "react";
import { FaUsers, FaCalendarCheck, FaHistory, FaFileInvoiceDollar } from "react-icons/fa";

export const sidenavbarData = [
  {
    title: "All Suppliers",
    path: "/Supplier.js",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Supplying Details",
    path: "/Report_Table.js",
    icon: <FaFileInvoiceDollar />,
    cName: "nav-text",
  },
  {
    title: "My Appointments",
    path: "/Report_Table.js",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Former Suppliers",
    path: "/FormerSuppliers.js",
    icon: <FaHistory />,
    cName: "nav-text",
  },
];
