 import React from "react";
import { Link } from "react-router-dom"
import '../styles/Navbar.css';
import { SidebarData } from "./SidebarData.js";

export default function Sidebar(){
        return(
                <div>
                <div className="sidebar">
                <nav className="sidebar-nav">
                        <ul className="sidebar-menu-items">
                               {SidebarData.map((item,index) =>{
                                console.log(item.path)
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