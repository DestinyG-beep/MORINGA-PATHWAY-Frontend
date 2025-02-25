import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to Moringa Pathway</h2>} />
        <Route path="/jobs" element={<h2>Job Listings</h2>} />
        <Route path="/resources" element={<h2>Career Resources</h2>} />
        <Route path="/profile" element={<h2>User Profile</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
