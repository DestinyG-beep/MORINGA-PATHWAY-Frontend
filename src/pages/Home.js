import React from "react";
import "../styles/Home.css"; // Import styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Moringa Pathway</h1>
          <p>Discover • Grow • Transition</p>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How it works</h2>
          <div className="steps">
            <div className="step">
              <h3>Create Account</h3>
              <p>Sign up and create your profile.</p>
            </div>
            <div className="step">
              <h3>Explore Jobs</h3>
              <p>Browse job listings from top companies.</p>
            </div>
            <div className="step">
              <h3>Apply Easily</h3>
              <p>Submit applications in one click.</p>
            </div>
          </div>
        </section>

        {/* Jobs Available Section */}
        <section className="jobs-available">
          <h2>Jobs Available</h2>
          <div className="job-list">
            <div className="job-item">
              <h3>Physical Creative Facilitator</h3>
              <p>Company: ABC Ltd | Location: Remote</p>
              <button>Apply</button>
            </div>
            <div className="job-item">
              <h3>District Investment Director</h3>
              <p>Company: XYZ Corp | Location: Nairobi</p>
              <button>Apply</button>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="banner">
          <h2>Connecting Talent with Opportunities</h2>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>Testimonials from Our Customers</h2>
          <div className="testimonial">
            <p>"Amazing platform! I got hired in a week!"</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"Best career support ever!"</p>
            <p>- Jane Smith</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
