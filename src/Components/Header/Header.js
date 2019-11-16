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
         <h1 className="text-muted">Conduit</h1>
         {
        localStorage.Token ? 
        <>
          <Link to="/Setting" className="btn btn-outline-success">Setting</Link> 
          <Link to="/NewPost"className="btn btn-outline-success">New Post</Link> 
          <Link onClick={Logout}className="btn btn-outline-success">Logout</Link>
        </>
        :
           <>
           <div className="Children" >
             <span className="btn btn-outline-success"><Link to="/Register" as="button" style={{color:" rgb(87, 82, 82)",textDecorationLine:"none"}}>Sign Up</Link></span>
             <span className="btn btn-outline-success"><Link to="/Login" as="button" style={{ color:"rgb(87, 82, 82)",textDecorationLine:"none"}}>Sign In</Link></span> 
           </div>              
            </>
          }
      </div>
    )
}

export default withRouter(Header);