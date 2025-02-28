import React from "react";

export const Step = ({ icon, title, description }) => {
  return (
    <div className="w-64 h-72 flex flex-col items-center p-6 shadow-lg bg-white rounded-2xl">
      <img className="w-16 h-16" src={icon} alt={title} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-center text-base mt-2">{description}</p>
    </div>
  );
};

export default Step;