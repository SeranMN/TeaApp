import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarDataAshen';
import './Navbar.css'
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setsidebar] = useState(true);
    // const showsidebar = () => setsidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                      
                    </Link>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle'>
                            {/* <Link to='#' className='menu-bars'>
                                <AiOutlineClose />
                            </Link> */}


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