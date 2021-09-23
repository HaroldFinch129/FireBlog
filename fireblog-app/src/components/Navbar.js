import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext} from "../contexts/AuthContext";
// import { logOut } from "../helpers/firebase";

const Navbar = () => {

  const [showToggle, setShowToggle] = useState(false);
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="Navbar_Container">
      <button className="logo_button">
        <img src="https://eds-fireblog.herokuapp.com/static/media/cw.041cf5e8.jpeg" className="image" alt="logo"/>
        </button>
      <Link to="/" className="navbar_header">
        <h2>BLOG</h2>
      </Link>
      <button className="navbarmenu" onClick={()=>
      {setShowToggle(!showToggle);}}>
      <i className="fas fa-user-circle" id="menuıcon"></i>
      </button>
      {showToggle &&(
        <div className="menu">
          {!currentUser ?
          <>
        <button className="page">
        <Link to="/Register" className="navbar_header">REGISTER</Link>
        </button>
        
        <button className="page">
        <Link to="/Login" className="navbar_header">LOGIN</Link>
        </button>
        
        </>
        :
        <>
        <button className="page">
        <Link to="/Profile" className="navbar_header">PROFILE</Link>
        </button>
        </>
      }
      </div>
      )}
        
    </div>
  );
};

export default Navbar;
