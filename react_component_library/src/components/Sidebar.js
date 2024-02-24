import React from "react"
import {Link} from 'react-router-dom'
export default function Sidebar(){
        return(
        <nav>
        <Link to='navbarpage' className="nav--icon">Navbar</Link>
        <Link to='cardpage'className="nav--items"> Card</Link>
        <Link to='footerpage' className="nav--items">Footer</Link>
        </nav>
        );
}