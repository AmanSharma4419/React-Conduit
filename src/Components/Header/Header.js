import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import  "./Header.css";


function Header(props) {
  
  const Logout = () => {
    console.log(props)
    localStorage.clear();
    props.history.push("/Login")
}

    return(
      <div className="Parent" >
         <h1 className="Heading">Conduit</h1>
         {
        localStorage.Token ? 
        <>
          <Link to="/Setting" style={{textDecoration:"none"}}>Setting</Link> 
          <Link to="/NewPost"style={{textDecoration:"none"}}>New Post</Link> 
          <Link onClick={Logout}style={{textDecoration:"none"}}>Logout</Link>
        </>
        :
           <>
           <div className="Children" >
             <nav><Link to="/Register" as="button" style={{color:" rgb(87, 82, 82)",textDecorationLine:"none"}}>Sign Up</Link></nav>
             <nav><Link to="/Login" as="button" style={{ color:"rgb(87, 82, 82)",textDecorationLine:"none"}}>Sign In</Link></nav>  
           </div>
                       
            </>
          }
      </div>
    )
}

export default withRouter(Header);