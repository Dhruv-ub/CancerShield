import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you use Link for routing
import './Navbar.css';  // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for toggling menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">OralCare AI</Link> {/* Using Link for navigation */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about-cancer" className="navbar-link" onClick={toggleMenu}>About Cancer</Link>
          <Link to="/login" className="navbar-link" onClick={toggleMenu}>Login</Link>
          <Link to="/register" className="navbar-link" onClick={toggleMenu}>Register</Link>
          <Link to="/detect-cancer" className="navbar-link" onClick={toggleMenu}>Detect Cancer</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
