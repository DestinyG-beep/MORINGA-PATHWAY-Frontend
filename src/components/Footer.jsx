import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-10 flex flex-col items-center">
      <p className="text-lg">Moringa Pathway - Connecting Talent with Opportunities</p>
      <div className="flex gap-6 mt-4">
        {["Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
          <a key={index} href="#" className="hover:underline">{link}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;