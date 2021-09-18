import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar_Container">
        <img src="#" alt="logo"/>
      <Link to="/">
        <h2>BLOG</h2>
      </Link>
      <div className="navbar_menu">
        <Link to="/Login" className="Button">Login</Link>
        <Link to="/Register" className="Button">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
