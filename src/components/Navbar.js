import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/about us">About Us</Link></li>
        <li><Link to="/contact us">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;