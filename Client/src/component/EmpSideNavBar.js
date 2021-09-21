import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { empsidenavbarData } from "./EmpSidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Modaldelete from "./CusModaldelete";


const EmpSideNavBar = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [modalDelete, setModalDelete] = React.useState(false);
   const[modleType,setModaltype] = useState("")
  
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          
            
       
        </div>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
             <h3 onClick={() => { setModalDelete(true); setModaltype("logout") }} >{ token.name}</h3>
            </li>
            {empsidenavbarData.map((item, index) => {
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
      </IconContext.Provider >
         <Modaldelete
                        show={modalDelete}
                        type = {modleType}
                onHide={() => setModalDelete(false)}
               
                />
    </div>
  );
};

export default EmpSideNavBar;
