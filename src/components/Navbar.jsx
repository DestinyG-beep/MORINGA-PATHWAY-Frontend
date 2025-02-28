import React from "react";
import { Button } from "../pages/Button/Button.jsx";

export const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full p-5 bg-transparent">
      <nav className="flex gap-5 text-white">
        {["Home", "Jobs", "About Us", "Contact Us"].map((item, index) => (
          <div key={index} className="cursor-pointer hover:opacity-100 opacity-60">{item}</div>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <span className="text-white cursor-pointer">Login</span>
        <Button color="primary">Register</Button>
      </div>
    </header>
  );
};

export default NavBar;