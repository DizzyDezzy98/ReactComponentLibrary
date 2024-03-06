import React from "react";
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';
export default function Navbar(){
    return(
        <div>
        <nav className="main-nav">
        <Link to='/' className="nav--icon">Home</Link>
        <Link to='about'className="nav--items"> About</Link>
        <Link to='components' className="nav--items">Components</Link>
        </nav>
        </div>
    )
}