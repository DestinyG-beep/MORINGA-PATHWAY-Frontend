import React from "react";
import { Button } from "../Button/Button";
import apple from "./apple.svg";
import check11 from "./check-1-1.svg";
import line24 from "./line-24.svg";
import logoGoogleg48Dp from "./logo-googleg-48dp.png";
import mdiEye from "./mdi-eye.svg";

export const LogIn = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      {/* Hero Section */}
      <header className="flex flex-col w-full max-w-[1440px] h-[235px] items-center gap-[60px] pt-[74px] pb-10 px-[166px] bg-[#070b40] bg-[url(/hero.png)] bg-cover bg-center">
        <h1 className="text-white text-6xl font-bold">Log in</h1>
      </header>

      {/* Login Form Section */}
      <main className="flex flex-col w-full max-w-[1440px] h-[835px] items-center gap-[60px] pt-[60px] pb-[120px] bg-[#ebf5f4]">
        <section className="flex flex-col items-center gap-4">
          <h2 className="text-[#1f8890] text-2xl font-medium">Welcome Back!</h2>

          {/* Email Input */}
          <div className="flex flex-col gap-2 w-80">
            <label className="text-[#1f8890] text-sm font-medium">Email</label>
            <div className="flex items-center justify-between px-4 py-2 border border-[#a7acd6] rounded-lg">
              <input
                className="w-full bg-transparent border-none text-sm text-primary-20"
                placeholder="example@gmail.com"
                type="email"
              />
              <img className="w-6 h-6" alt="Show password" src={mdiEye} />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 w-80">
            <label className="text-[#1f8890] text-sm font-medium">
              Password
            </label>
            <div className="flex items-center justify-between px-4 py-2 border border-[#a7acd6] rounded-lg">
              <input
                className="w-full bg-transparent border-none text-sm text-primary-20"
                placeholder="at least 8 characters"
                type="password"
              />
              <img className="w-6 h-6" alt="Show password" src={mdiEye} />
            </div>
          </div>

          <a href="#" className="text-[#1f8890] text-sm">
            Forgot your password?
          </a>

          {/* Sign In Button */}
          <Button color="primary" size="medium">
            Sign In
          </Button>

          {/* OR Divider */}
          <div className="flex items-center gap-6">
            <img className="w-32" alt="Line" src={line24} />
            <span className="text-neutral-50 text-sm font-medium">OR</span>
            <img className="w-32" alt="Line" src={line24} />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-2 w-80">
            <button className="flex items-center justify-center gap-6 px-8 py-2 border border-[#a8b9ca] bg-grayscale-4 rounded-lg">
              <img
                className="w-5 h-5"
                alt="Google logo"
                src={logoGoogleg48Dp}
              />
              <span className="text-black text-sm font-medium">
                Sign in with Google
              </span>
            </button>

            <button className="flex items-center justify-center gap-6 px-8 py-3 bg-black rounded-lg">
              <img className="w-6 h-6" alt="Apple logo" src={apple} />
              <span className="text-white text-sm font-medium">
                Sign in with Apple
              </span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-[#1f8890] text-sm">
            Don’t have an account?{" "}
            <a href="#" className="font-medium underline">
              Register
            </a>
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col w-full max-w-[1440px] h-[367px] items-center gap-20 pt-[100px] pb-[60px] px-[202px] bg-[#070b40]">
        <div className="flex w-full max-w-[1296px] justify-between">
          {/* Job Section */}
          <div className="flex flex-col w-[377px] gap-10">
            <div className="flex items-center gap-2.5">
              <img className="w-7 h-7" alt="Check" src={check11} />
              <h3 className="text-white text-xl font-semibold">Job</h3>
            </div>
            <p className="text-white text-base">
              The quick brown fox jumps over the lazy fox.
            </p>
          </div>

          {/* Company Links */}
          <div className="flex flex-col w-32 gap-6">
            <h3 className="text-white text-xl font-semibold">Company</h3>
            <ul className="text-white text-base space-y-4">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Partners</li>
              <li>For Candidates</li>
              <li>For Employers</li>
            </ul>
          </div>

          {/* Job Categories */}
          <div className="flex flex-col w-32 gap-6">
            <h3 className="text-white text-xl font-semibold">Job Categories</h3>
            <ul className="text-white text-base space-y-4">
              <li>Telecommunications</li>
              <li>Hotels & Tourism</li>
              <li>Construction</li>
              <li>Education</li>
              <li>Financial Services</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold">Newsletter</h3>
            <p className="text-white text-base">
              The quick brown fox jumps over the lazy fox.
            </p>
            <input
              className="w-[306px] h-[50px] border border-white rounded-xl px-4 text-sm text-white bg-transparent"
              placeholder="Email Address"
              type="email"
            />
            <button className="w-[306px] h-[50px] bg-[#e5322d] text-white text-base font-bold rounded-xl">
              Subscribe now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
