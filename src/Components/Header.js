import React from "react";
import {Link} from "react-router-dom";
import '../App.css';
import {withRouter} from "react-router-dom"



function Header(props) {
  
  const Logout = () => {
    console.log(props)
    // localStorage.clear();
    props.history.push("/Login")
}

    return(
       <header className = "Header">
         {
        localStorage.Token ? 
        <>
          <Link to="/Setting"><button>Settings</button></Link> 
          <Link to="/NewPost"><button>New Post</button></Link> 
          <button onClick={Logout}>Logout</button>
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

export default withRouter(Header);