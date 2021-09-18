import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [showToggle, setShowToggle] = useState(false);
  return (
    <div className="Navbar_Container">
        <img src="#" alt="logo"/>
      <Link to="/">
        <h2>BLOG</h2>
      </Link>
      <div className="navbarmenu" onClick={()=>
      {setShowToggle(!showToggle);}}>
      <i className="fas fa-user-circle"></i>
      </div>
      {showToggle &&(
      <div className="menu">
        <div className="page">
        <Link to="/Login" >Login</Link>
        </div>
        <div className="page">
        <Link to="/Register" >Register</Link>
        </div>
      </div>
      )}
        
    </div>
  );
};

export default Navbar;
