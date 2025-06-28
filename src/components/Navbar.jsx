import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-center leading-tight">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-600 font-extrabold">MTBYOWN</span>
          </h1>
          <p className="text-sm text-gray-600 -mt-1">Digital Solution</p>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6 font-medium text-sm md:text-base">
          <li><Link to="/" className="hover:text-orange-600">HOME</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">ABOUT</Link></li>
          <li><Link to="/services" className="hover:text-orange-600">SERVICES</Link></li>
          <li><Link to="/corporatetraining" className="hover:text-orange-600">CORPORATE TRAINING</Link></li>
          <li><Link to="/verticals" className="hover:text-orange-600">VERTICALS</Link></li>
          <li><Link to="/portfolio" className="hover:text-orange-600">PORTFOLIO</Link></li>
          <li><Link to="/blogs" className="hover:text-orange-600">BLOGS</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">CONTACT US</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-3 font-medium text-sm shadow-md">
          <li><Link to="/" className="block hover:text-orange-600" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/about" className="block hover:text-orange-600" onClick={toggleMenu}>ABOUT</Link></li>
          <li><Link to="/services" className="block hover:text-orange-600" onClick={toggleMenu}>SERVICES</Link></li>
          <li><Link to="/corporatetraining" className="block hover:text-orange-600" onClick={toggleMenu}>CORPORATE TRAINING</Link></li>
          <li><Link to="/verticals" className="block hover:text-orange-600" onClick={toggleMenu}>VERTICALS</Link></li>
          <li><Link to="/portfolio" className="block hover:text-orange-600" onClick={toggleMenu}>PORTFOLIO</Link></li>
          <li><Link to="/blogs" className="block hover:text-orange-600" onClick={toggleMenu}>BLOGS</Link></li>
          <li><Link to="/contact" className="block hover:text-orange-600" onClick={toggleMenu}>CONTACT US</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
