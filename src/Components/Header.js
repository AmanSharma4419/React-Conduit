import React from "react";
import {Link} from "react-router-dom";
import '../App.css';
import {withRouter} from "react-router-dom"



function Header(props) {
  
  const Logout = () => {
    console.log(props)
    localStorage.clear();
    props.history.push("/Login")
}

    return(
      <div className="Parent">
       <header className="header">
         <h1 className="heading">Conduit React</h1>
         {
        localStorage.Token ? 
        <>
          <Link to="/Setting"><button className="btn">Settings</button></Link> 
          <Link to="/NewPost"><button className="btn">New Post</button></Link> 
          <button onClick={Logout} className="btn">Logout</button>
        </>
        :
           <>
            <Link to="/Register"><button className="btn">Register!</button></Link>
            <Link to="/Login"><button className="btn">Login!</button></Link>
            </>
          }
        </header>
      </div>
    )
}

export default withRouter(Header);