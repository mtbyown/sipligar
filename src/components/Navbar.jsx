import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md  top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-center leading-tight">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-600 font-extrabold">Useless Web</span>
        
          </h1>
        
        </div>

       </div>

       

   
    </nav>
  );
};

export default Navbar;
