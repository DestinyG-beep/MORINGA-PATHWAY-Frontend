import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] bg-cover bg-center bg-[url('/hero.png')] text-white text-center px-10">
      <h1 className="text-6xl font-bold">Moringa Pathway</h1>
      <p className="text-xl mt-4">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
    </div>
  );
};

export default HeroSection;