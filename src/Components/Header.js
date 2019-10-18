import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

function Header() {
    return(
        <header className = "Header">
            <Link to="/Register"><button>Register!</button></Link>
            <Link to="/Login"><button>Login!</button></Link>
        </header>
    )
}

export default Header;