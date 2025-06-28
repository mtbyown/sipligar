import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-24 bg-black text-gray-300 py-12">
      {/* Brand Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-xl font-bold text-white mb-2">MTBYOWN Digital Solution</h2>
        <p className="max-w-xl mx-auto">Your trusted partner for AI-powered software testing and quality assurance.</p>
      </div>

      {/* Info Sections */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Quick Links */}
       {/* Quick Links */}
<div className="text-center lg:text-left">
  <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
  <div className="flex flex-col items-center lg:items-start gap-2 text-sm md:text-base">
   
    <Link to="/about" className="hover:text-orange-500">About</Link>
    <Link to="/services" className="hover:text-orange-500">Services</Link>
    <Link to="/corporatetraining" className="hover:text-orange-500">Corporate Training</Link>

    <Link to="/blogs" className="hover:text-orange-500">Blogs</Link>
    <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
  </div>
</div>


        {/* Locations */}
        <div className="text-center lg:text-left">
          <h3 className="font-semibold text-white mb-2">Locations</h3>
          <p>India: 123, Subhash Nagar,</p>
          <p>Saharanpur, Uttar Pradesh, India.</p>
        </div>

        {/* Contact */}
        <div className="text-center lg:text-left">
          <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          <p>Email: admin@mtbyown.com</p>
          <p>India: +91 9xx xxx xxxx</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © 2025 MTBYOWN Digital Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
