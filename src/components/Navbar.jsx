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
        {/* Logo */}
        <NavLink to="/" className="logo">
          OralCare AI
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navbar Links */}
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" exact activeClassName="active" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={toggleMenu}
          >
            About Cancer
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Register
          </NavLink>
          <NavLink
            to="/detect"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Detect Cancer
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
