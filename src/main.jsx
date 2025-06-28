import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CorporateTraining from "./pages/CorporateTraining";
import Verticals from "./pages/Verticals";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/corporatetraining" element={<CorporateTraining />} />
      <Route path="/verticals" element={<Verticals />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div className="text-center py-20 text-white">Page not found</div>} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
