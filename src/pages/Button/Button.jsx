import React from "react";

export const Button = ({ color, children }) => {
  const bgColor = color === "primary" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700";
  
  return (
    <button className={`${bgColor} text-white py-2 px-4 rounded-lg`}>
      {children}
    </button>
  );
};

export default Button;