import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

function Header() {
    console.log(localStorage.Data)
    return(
       <header className = "Header">
           {
        localStorage.Token ? 
        <>
          <Link to="/Setting"><button>Settings</button></Link> 
          <Link to="/NewPost"><button>New Post</button></Link> 
        </>
        :
           <>
            <Link to="/Register"><button>Register!</button></Link>
            <Link to="/Login"><button>Login!</button></Link>
            </>
           }
        </header>
    )
}

export default Header;