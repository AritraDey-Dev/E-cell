import { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
  const [sectionStack, setSectionStack] = useState([]);
  const navigate = useNavigate(); // Use useNavigate correctly
  const nav1 = () => {
    navigate('/'); // Navigate to the home page
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerHeight / 10;
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;

      // Store the current section before changing to a new one
      if (sectionStack[sectionStack.length - 1] !== sectionId) {
        setSectionStack([...sectionStack, sectionId]);
      }

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToAboutUs = () => {
    if (sectionStack.length > 1) {
      const previousSection = sectionStack[sectionStack.length - 2];
      setSectionStack(sectionStack.slice(0, -1)); // Remove the current section
      scrollToSection(previousSection);
    } else {
      scrollToSection("about-us");
    }
  };

  const scrollToContactUs = () => {
    scrollToSection("contact");
  };

  return (
    <div className="h-20 z-50 flex items-center justify-between w-full sticky top-0 bg-[#b9b9b9] bg-opacity-10 backdrop-blur-lg">
      {/* Logo and E-CELL */}
      <div className="flex items-center pl-6 no-select">

         <a href="https://nitt.edu/" target="_blank" rel="noopener noreferrer">
          <img
            src="/nit-logo.png"
            alt="NIT Logo"
            className="h-12 mr-3 pointer no-select"
          />
        </a>
        <a
          href="https://ecell-nitt.org/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/LOGO-FINAL.png"
            alt="E-Cell Logo"
            className="h-12 mr-3 no-select"
          />
        </a>
      </div>

      {/* Links and Social Media */}
      <div className="flex items-center font-semibold pr-6 space-x-6 no-select">
        <a
          onClick={nav1}
          className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer"
        >
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>
        <a
          onClick={scrollToContactUs}
          className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer"
        >
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