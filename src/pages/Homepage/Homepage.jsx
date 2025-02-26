import React from "react";
import briefcase22 from "./briefcase-2-2.svg";
import chevronDown from "./chevron-down.svg";
import clock from "./clock.svg";
import g1352 from "./g-135-2.png";
import g135 from "./g-135.png";
import icon2 from "./icon-2.png";
import icon3 from "./icon-3.png";
import iconBg2 from "./icon-bg-2.svg";
import iconBg3 from "./icon-bg-3.svg";
import iconBg4 from "./icon-bg-4.svg";
import iconBg5 from "./icon-bg-5.svg";
import iconBg6 from "./icon-bg-6.svg";
import iconBg from "./icon-bg.svg";
import icon from "./icon.png";
import image from "./image.png";
import image1 from "./image.svg";
import logo2 from "./logo-2.svg";
import logo3 from "./logo-3.svg";
import logo from "./logo.svg";
import mapPin from "./map-pin.svg";
import quotes from "./quotes.svg";
import search from "./search.svg";
import star5 from "./star-5.svg";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <header className="header">
          <div className="div">
            <div className="text">
              <div className="text-wrapper">Home</div>
            </div>

            <div className="text">
              <div className="text-wrapper-2">Jobs</div>
            </div>

            <div className="text">
              <div className="text-wrapper-2">About Us</div>
            </div>

            <div className="text">
              <div className="text-wrapper-2">Contact Us</div>
            </div>
          </div>

          <div className="buttons">
            <div className="text-wrapper-3">Login</div>

            <button className="button">
              <div className="text-wrapper-4">Register</div>
            </button>
          </div>
        </header>

        <div className="text-inputs-icons">
          <div className="div-2">
            <div className="div-wrapper">
              <div className="text-2">
                <div className="text-wrapper-5">Moringa Pathway</div>

                <p className="p">
                  Connecting Talent with Opportunity: Your Gateway to Career
                  Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works">
        <div className="div-2">
          <div className="text-wrapper-6">How it works</div>

          <p className="text-wrapper-7">
            The quick brown fox jumps over the lazy fox.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <img className="icon-bg" alt="Icon bg" src={iconBg} />

            <div className="text-3">
              <div className="text-wrapper-8">Create Account</div>

              <p className="text-wrapper-9">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="icon-bg" alt="Icon bg" src={iconBg2} />

            <div className="text-3">
              <div className="text-wrapper-8">Upload Resume</div>

              <p className="text-wrapper-9">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="icon-bg" alt="Icon bg" src={iconBg4} />

            <div className="text-3">
              <div className="text-wrapper-8">Find Jobs</div>

              <p className="text-wrapper-10">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="icon-bg" alt="Icon bg" src={iconBg5} />

            <div className="text-3">
              <div className="text-wrapper-8">Apply Job</div>

              <p className="text-wrapper-9">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="search">
        <div className="text-icons-bg">
          <div className="text-icons">
            <div className="text-4">
              <div className="text-wrapper-11">Job Title or Company</div>
            </div>

            <div className="text-icon">
              <div className="text-wrapper-12">Select Location</div>

              <img className="img" alt="Chevron down" src={chevronDown} />
            </div>

            <div className="text-icon-2">
              <div className="text-wrapper-12">Select Category</div>

              <img className="img" alt="Chevron down" src={chevronDown} />
            </div>
          </div>
        </div>

        <button className="button-2">
          <img className="search-2" alt="Search" src={search} />

          <div className="text-wrapper-13">Search Job</div>
        </button>
      </div>

      <div className="jobs">
        <div className="icons-text">
          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={iconBg3} />

            <div className="text-2">
              <div className="text-wrapper-14">25,850</div>

              <div className="text-wrapper-15">Jobs</div>
            </div>
          </div>

          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={iconBg6} />

            <div className="text-2">
              <div className="text-wrapper-14">10,250</div>

              <div className="text-wrapper-15">Candidates</div>
            </div>
          </div>

          <div className="icon-text">
            <img className="icon-bg" alt="Icon bg" src={image1} />

            <div className="text-2">
              <div className="text-wrapper-14">18,400</div>

              <div className="text-wrapper-15">Companies</div>
            </div>
          </div>
        </div>

        <div className="text-5">
          <div className="div-3">
            <div className="text-wrapper-6">Jobs Available</div>
          </div>

          <div className="text-wrapper-16">View all</div>
        </div>

        <div className="cards-2">
          <div className="card-2">
            <div className="text-badge-icon">
              <div className="badge-icon">
                <div className="badge">
                  <div className="element-min-ago">12 min ago</div>
                </div>

                <img className="img" alt="Icon" src={icon} />
              </div>

              <div className="div">
                <img className="logo" alt="Logo" src={logo} />

                <div className="text-6">
                  <div className="developer-expert-in">
                    Regional Creative Facilitator
                  </div>

                  <div className="armstrong-o-hara-and">Wisozk - Becker Co</div>
                </div>
              </div>
            </div>

            <div className="div-4">
              <div className="icons-text-2">
                <div className="icon-text-2">
                  <img className="img" alt="Briefcase" src={briefcase22} />

                  <div className="text-wrapper-17">ICT</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Clock" src={clock} />

                  <div className="text-wrapper-17">Part time</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="G" src={g135} />

                  <div className="text-wrapper-17">Ksh 1000- Ksh 4000</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Map pin" src={mapPin} />

                  <div className="text-wrapper-17">Nairobi, Kenya</div>
                </div>
              </div>

              <button className="button">
                <div className="text-wrapper-4">Job Details</div>
              </button>
            </div>
          </div>

          <div className="card-2">
            <div className="text-badge-icon">
              <div className="badge-icon">
                <div className="badge">
                  <div className="element-min-ago">24 min ago</div>
                </div>

                <img className="img" alt="Icon" src={icon3} />
              </div>

              <div className="div">
                <img className="logo" alt="Logo" src={logo2} />

                <div className="text-6">
                  <div className="developer-expert-in">
                    District Intranet Director
                  </div>

                  <div className="armstrong-o-hara-and">
                    VonRueden - Weber Co
                  </div>
                </div>
              </div>
            </div>

            <div className="div-4">
              <div className="icons-text-2">
                <div className="icon-text-2">
                  <img className="img" alt="Briefcase" src={briefcase22} />

                  <div className="text-wrapper-17">ICT</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Clock" src={clock} />

                  <div className="text-wrapper-17">Full time</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="G" src={image} />

                  <div className="text-wrapper-17">Ksh 1000- Ksh 4000</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Map pin" src={mapPin} />

                  <div className="text-wrapper-17">Nairobi, Kenya</div>
                </div>
              </div>

              <button className="button">
                <div className="text-wrapper-4">Job Details</div>
              </button>
            </div>
          </div>

          <div className="card-2">
            <div className="text-badge-icon">
              <div className="badge-icon">
                <div className="badge">
                  <div className="element-min-ago">26 min ago</div>
                </div>

                <img className="img" alt="Icon" src={icon2} />
              </div>

              <div className="div">
                <img className="logo" alt="Logo" src={logo3} />

                <div className="text-6">
                  <div className="developer-expert-in">
                    Corporate Tactics Facilitator
                  </div>

                  <p className="armstrong-o-hara-and">
                    Cormier, Turner and Flatley Inc
                  </p>
                </div>
              </div>
            </div>

            <div className="div-4">
              <div className="icons-text-2">
                <div className="icon-text-2">
                  <img className="img" alt="Briefcase" src={briefcase22} />

                  <div className="text-wrapper-17">Commerce</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Clock" src={clock} />

                  <div className="text-wrapper-17">Full time</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="G" src={g1352} />

                  <div className="text-wrapper-17">Ksh 1000- Ksh 4000</div>
                </div>

                <div className="icon-text-2">
                  <img className="img" alt="Map pin" src={mapPin} />

                  <div className="text-wrapper-17">Nairobi, Kenya</div>
                </div>
              </div>

              <button className="button">
                <div className="text-wrapper-4">Job Details</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="info-block">
        <div className="img-text-buttons">
          <div className="img-2" />

          <div className="text-buttons">
            <div className="div-3">
              <div className="text-wrapper-18">
                Connecting talent with opportunities
              </div>
            </div>

            <div className="button-wrapper">
              <button className="button">
                <div className="text-wrapper-4">Search Job</div>
              </button>
            </div>
          </div>
        </div>

        <div className="div-4">
          <div className="text-7">
            <div className="text-wrapper-19">12k+</div>

            <div className="text-wrapper-20">Clients worldwide</div>
          </div>

          <div className="text-7">
            <div className="text-wrapper-19">20k+</div>

            <div className="text-wrapper-20">Active resume</div>
          </div>

          <div className="text-7">
            <div className="text-wrapper-19">18k+</div>

            <div className="text-wrapper-20">Compnies</div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="video">
          <div className="button-text">
            <p className="good-life-begins">
              Good Life Begins With <br />A Good Foundation
            </p>
          </div>
        </div>

        <div className="div-2">
          <div className="text-wrapper-21">Testimonials from Our Customers</div>
        </div>

        <div className="cards-3">
          <div className="card-3">
            <div className="div-3">
              <div className="div-5">
                <div className="stars">
                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />
                </div>

                <div className="text-wrapper-22">Amazing services</div>
              </div>

              <p className="text-wrapper-23">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="avatar-text">
              <div className="avatar" />

              <div className="text-8">
                <div className="text-wrapper-24">User 1</div>

                <div className="text-wrapper-25">Happy Client</div>
              </div>
            </div>

            <img className="quotes" alt="Quotes" src={quotes} />
          </div>

          <div className="card-3">
            <div className="div-3">
              <div className="div-5">
                <div className="stars">
                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />
                </div>

                <div className="text-wrapper-22">Everything simple</div>
              </div>

              <p className="text-wrapper-23">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="avatar-text">
              <div className="avatar" />

              <div className="text-8">
                <div className="text-wrapper-26">User 2</div>

                <div className="text-wrapper-25">Happy Client</div>
              </div>
            </div>

            <img className="quotes" alt="Quotes" src={quotes} />
          </div>

          <div className="card-3">
            <div className="div-3">
              <div className="div-5">
                <div className="stars">
                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />

                  <img className="star" alt="Star" src={star5} />
                </div>

                <div className="text-wrapper-22">Awesome, thank you!</div>
              </div>

              <p className="text-wrapper-23">
                The quick brown fox jumps over the lazy fox.
              </p>
            </div>

            <div className="avatar-text">
              <div className="avatar-2" />

              <div className="text-8">
                <div className="text-wrapper-24">User 3</div>

                <div className="text-wrapper-25">Happy Client</div>
              </div>
            </div>

            <img className="quotes" alt="Quotes" src={quotes} />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="text-icons-2">
          <div className="text-9">
            <div className="text-wrapper-27">Company</div>

            <div className="text-10">
              <div className="text-wrapper-28">About Us</div>

              <div className="text-wrapper-29">Our Team</div>

              <div className="text-wrapper-29">Partners</div>

              <div className="text-wrapper-29">For Candidates</div>

              <div className="text-wrapper-29">For Employers</div>
            </div>
          </div>

          <div className="div-5">
            <div className="text-wrapper-27">Job Categories</div>

            <div className="text-10">
              <div className="text-wrapper-30">Telecomunications</div>

              <div className="text-wrapper-31">Hotels &amp; Tourism</div>

              <div className="text-wrapper-31">Construction</div>

              <div className="text-wrapper-31">Education</div>

              <div className="text-wrapper-31">Financial Services</div>
            </div>
          </div>

          <div className="text-input-button">
            <div className="text-wrapper-27">Newsletter</div>

            <p className="text-wrapper-32">
              The quick brown fox jumps over the lazy fox.
            </p>

            <input className="input" placeholder="Email Address" type="email" />

            <button className="button-3">
              <div className="text-wrapper-33">Subscribe now</div>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

/*export default Homepage;*/