import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div>
        <nav>
        <Link to='/' className="nav--icon">Home</Link>
        <Link to='about'className="nav--items"> About</Link>
        <Link to='components' className="nav--items">Components</Link>
        </nav>
        </div>
    )
}