import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to='/'>
        <h2>BLOG</h2>
      </Link>

      <Link to="/Login">
        Login
      </Link>
      <Link to="/Register">
        Register
      </Link>
    </div>
  );
};

export default Navbar;
