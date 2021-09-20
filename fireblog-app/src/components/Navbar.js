import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [showToggle, setShowToggle] = useState(false);
  return (
    <div className="Navbar_Container">
        <img src="https://eds-fireblog.herokuapp.com/static/media/cw.041cf5e8.jpeg" className="image" alt="logo"/>
      <Link to="/">
        <h2>BLOG</h2>
      </Link>
      <button className="navbarmenu" onClick={()=>
      {setShowToggle(!showToggle);}}>
      <i className="fas fa-user-circle" id="menuıcon"></i>
      </button>
      {showToggle &&(
        <div className="menu">
        <button className="page">
        <Link to="/Profile" ><span className="spantext">PROFILE</span></Link>
        </button>
        <button className="page">
        <Link to="/Login" ><span className="spantext">LOGIN</span></Link>
        </button>
        
        <button className="page">
        <Link to="/Register" ><span className="spantext">REGISTER</span></Link>
        </button>
      </div>
      )}
        
    </div>
  );
};

export default Navbar;
