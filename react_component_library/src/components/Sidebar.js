 import React from "react";
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import '../styles/Navbar.css';
import { SidebarData } from "./SidebarData.js";

export default function Sidebar(){
        return(
                <div>
                <div className="sidebar">
                        {/* <Link to='#' className='sidebar-items' /> */}
                <nav className="sidebar-nav">
                        <ul className="sidebar-menu-items">
                               {SidebarData.map((item,index) =>{
                                return(
                                        <li key = {index} className={item.cName}>
                                                <Link to={item.path} className="sidebar-link">
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                </Link>
                                        </li>
                                )
                               })}
                        </ul>
                </nav>
                </div>
                </div>
        )
}
// export default function Sidebar(){
//         return(
//         <nav>
//         <Link to='navbarpage' className="nav--icon">Navbar</Link>
//         <Link to='cardpage'className="nav--items"> Card</Link>
//         <Link to='footerpage' className="nav--items">Footer</Link>
//         </nav>
//         );
// }
