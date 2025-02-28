import React from "react";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "components/HeroSection";
import { Step } from "components/Step";
import { JobCard } from "components/JobCard";
import { Footer } from "components/Footer";

export const Homepage = () => {
  const steps = [
    { icon: "/icons/create-account.svg", title: "Create Account", description: "Sign up and get started." },
    { icon: "/icons/upload-resume.svg", title: "Upload Resume", description: "Showcase your skills." },
    { icon: "/icons/find-jobs.svg", title: "Find Jobs", description: "Browse and apply easily." },
    { icon: "/icons/apply-job.svg", title: "Apply Job", description: "Land your dream job." },
  ];

  const jobs = [
    { logo: "/logos/logo1.svg", title: "Software Engineer", company: "TechCorp", timeAgo: "12 min ago", category: "IT", jobType: "Full-time", salary: "$60k-$80k", location: "New York" },
    { logo: "/logos/logo2.svg", title: "Marketing Specialist", company: "BrandCo", timeAgo: "24 min ago", category: "Marketing", jobType: "Part-time", salary: "$30k-$50k", location: "Los Angeles" },
  ];

  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />

      <section className="flex flex-col items-center my-16">
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
        <div className="flex gap-6">
          {steps.map((step, index) => <Step key={index} {...step} />)}
        </div>
      </section>

      <section className="flex flex-col items-center my-16">
        <h2 className="text-4xl font-bold mb-8">Jobs Available</h2>
        <div className="flex flex-col gap-6">
          {jobs.map((job, index) => <JobCard key={index} {...job} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Homepage;
