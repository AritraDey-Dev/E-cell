import { useState } from "react";

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-blue-600 hover:text-[#fdcf41] transition duration-300"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="#"
        className="text-pink-600 hover:text-[#fdcf41] transition duration-300"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="#"
        className="text-blue-500 hover:text-[#fdcf41] transition duration-300"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
}

function Navbar() {
  return (
    <div className="h-20 z-50 flex items-center justify-between w-full sticky top-0 bg-[#68686808] bg-opacity-20 backdrop-blur-lg">
  {/* Logo and E-CELL */}
  <div className="flex items-center pl-6">
    <img src="images/LOGO-FINAL.png" alt="logo" className="h-12 mr-3" />
    <div className="text-2xl font-bold text-gray-800">E-CELL</div>
  </div>


      {/* Links and Social Media */}
      <div className="flex items-center font-semibold pr-6 space-x-6">
  <a href="#about" className="relative text-gray-900 hover:text-black transition duration-300 group">
    About Us
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
  </a>
  <a href="#contact" className="relative text-gray-900 hover:text-black transition duration-300 group">
    Contact Us
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
  </a>

        {/* Social Media Links */}
        <div className="ml-6 hidden lg:flex space-x-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
