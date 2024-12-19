import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          OralCare AI
        </NavLink>
        <nav className="navbar-links">
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About Cancer
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
          <NavLink to="/detect" activeClassName="active">
            Detect Cancer
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
