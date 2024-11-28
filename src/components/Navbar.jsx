// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="logo">OralCare AI</Link>
//         <nav className="navbar-links">
//           <Link to="/">Home</Link>
//           <Link to="/about">About Cancer</Link>
//           <Link to="/login">Login</Link>
//           <Link to="/register">Register</Link>
//           <Link to="/detect">Detect Cancer</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="logo">MyApp</div>

//         {/* Menu Links */}
//         <div className={`navbar-links ${menuOpen ? "mobile" : ""}`}>
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#contact">Contact</a>
//         </div>

//         {/* Buttons */}
//         <div className="navbar-buttons">
//           <button className="btn primary">Login</button>
//           <button className="btn secondary">Sign Up</button>
//         </div>

//         {/* Mobile Menu Icon */}
//         <div className="menu-icon" onClick={toggleMenu}>
//           ☰
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
        CancerShield AI

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
