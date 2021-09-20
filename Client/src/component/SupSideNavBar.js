import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { sidenavbarData } from "./SupSideNavBarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

const SideNavBar = () => {
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              {/* <FaBars onClick={showsidebar} /> */}
            </Link>
          </div>
          <nav className={"nav-menu active"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                {/* <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link> */}
              </li>
              {sidenavbarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    );
};

export default SideNavBar;
