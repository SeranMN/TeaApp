import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { sidenavbarData } from "./SupSideNavBarData";
import './Navbarnavod.css'
import { IconContext } from "react-icons";
import cup from '../Img/teacu.png'
import {FiLogOut} from "react-icons/fi"
import Modaldelete from './CusModaldelete';

const SideNavBar = () => {
  const [modalDelete, setModalDelete] = React.useState(false);
  const[modleType,setModaltype] = useState("")
  const token =JSON.parse(sessionStorage.getItem("token"));

  const logout=()=>{
    setModalDelete(true); 
    setModaltype("logout")
 }
    return (
      <div>
        <IconContext.Provider value={{ color: "#fff" }}>
        <div className='navbar'>
                    <div style={{color:"white",marginLeft:"300px",fontSize:"20px"}}>Supplier Management</div>
                    <div style={{color:"white",marginLeft:"840px",fontSize:"20px"}}>{token.email}</div>
                    <div style={{color:"white",marginRight:"30px",fontSize:"20px"}}><FiLogOut onClick={logout}/></div>
        </div>
         
          <nav className={"nav-menu active"}>
            <ul className="nav-menu-items">
            <li className='navbar-toggle'>
                            <div>
                            <img
                                src={cup}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            </div>
                            <div style={{color:"#659834",fontSize:"20px"}}>Gangasiri Tea</div>


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
        <Modaldelete
                        show={modalDelete}
                        type = {modleType}
                onHide={() => setModalDelete(false)}
               
            />
      </div>
    );
};

export default SideNavBar;