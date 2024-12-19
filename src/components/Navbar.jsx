import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          OralCare AI
        </NavLink>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" activeClassName="active" exact onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active" onClick={toggleMenu}>
            About Cancer
          </NavLink>
          <NavLink to="/login" activeClassName="active" onClick={toggleMenu}>
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active" onClick={toggleMenu}>
            Register
          </NavLink>
          <NavLink to="/detect" activeClassName="active" onClick={toggleMenu}>
            Detect Cancer
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
