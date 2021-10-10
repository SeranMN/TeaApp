import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarDatanavod';
import './Navbarnavod.css'
import { IconContext } from 'react-icons';
import cup from '../Img/teacu.png'
import {FiLogOut} from "react-icons/fi"

function Navbar() {
    const [sidebar, setsidebar] = useState(true);
    // const showsidebar = () => setsidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div style={{color:"white",marginLeft:"300px",fontSize:"20px"}}>Stock Management</div>
                    <div style={{color:"white",marginRight:"30px",fontSize:"20px"}}><FiLogOut/></div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
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
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span style={{marginLeft:'16px'}}>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}




                    </ul>



                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
