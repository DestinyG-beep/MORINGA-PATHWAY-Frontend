import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Moringa Pathway</h1>
      <input type="text" placeholder="Search for jobs, resources..." />
    </header>
  );
};

export default Header;