import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { AppBar } from "../AppBar/AppBar";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import check11 from "./check-1-1.svg";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center relative bg-white">
      {/* Hero Section */}
      <header className="flex flex-col w-full max-w-[1440px] h-[322px] items-center gap-[60px] pb-10 px-[166px] relative bg-[#070b40] bg-[url(/hero.png)] bg-cover bg-center">
        <AppBar appbarVariant="default" className="!w-full !bg-transparent" />
        <h1 className="font-bold text-6xl text-center text-white">About Us</h1>
      </header>

      {/* Content Section */}
      <section className="flex flex-col items-center gap-10 py-[60px] w-full">
        <div className="flex w-full max-w-[1199px] items-start gap-10 py-10">
          <h2 className="flex-1 font-semibold text-defaultblack text-[40px]">
            Elevation to success!
          </h2>
          <p className="flex-1 text-defaultblack text-base leading-6">
            The quick brown fox jumps over the lazy fox. The quick brown fox
            jumps over the lazy fox. The quick brown fox jumps over the lazy
            fox. The quick brown fox jumps over the lazy fox. The quick brown
            fox jumps over the lazy fox. The quick brown fox jumps over the lazy
            fox. The quick brown fox jumps over the lazy fox.
          </p>
        </div>

        <div className="relative w-full max-w-[1296px] h-[684px] rounded-[20px] bg-[url(/img.png)] bg-cover bg-center" />
      </section>

      {/* FAQ Section */}
      <section className="w-full">
        <Accordion accordionVariant="default" className="w-full" />
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col w-full max-w-[1440px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] bg-[#070b40]">
        <div className="flex w-full max-w-[1296px] justify-between">
          {/* Job Section */}
          <div className="flex flex-col w-[377px] gap-10">
            <div className="flex items-center gap-2.5">
              <img className="w-7 h-7" alt="Check" src={check11} />
              <span className="font-semibold text-white text-xl">Job</span>
            </div>
            <p className="text-white text-base leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          {/* Company Links */}
          <nav className="flex flex-col w-32 gap-6">
            <h3 className="font-semibold text-white text-xl">Company</h3>
            <ul className="flex flex-col gap-4 text-white text-base leading-[26px]">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Partners</li>
              <li>For Candidates</li>
              <li>For Employers</li>
            </ul>
          </nav>

          {/* Job Categories */}
          <nav className="flex flex-col gap-6">
            <h3 className="font-semibold text-white text-xl">Job Categories</h3>
            <ul className="flex flex-col gap-4 text-white text-base">
              <li>Telecommunications</li>
              <li>Hotels & Tourism</li>
              <li>Construction</li>
              <li>Education</li>
              <li>Financial Services</li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white text-xl">Newsletter</h3>
            <p className="text-white text-base leading-6">
              The quick brown fox jumps over the lazy fox.
            </p>
            <TextField variant="outlined" />
            <Button color="primary" size="medium">
              Subscribe now
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
