import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // Use useNavigate correctly

  const nav1 = () => {
    navigate('/Loginpage'); // Navigate to the Login page
  };

  const nav2 = () => {
    navigate('/Registerpage'); // Navigate to the Register page
  };

  return (
    <div className="h-20 z-50 flex flex-col w-full top-0 bg-transparent">
      {/* Logo and E-CELL */}
      <div className="flex items-center justify-between h-full px-6 no-select">
        <div className="flex items-center">
          <a href="https://ecell-nitt.org/#" target="_blank" rel="noopener noreferrer">
            <img 
              src="images/ecell-logo.png" 
              alt="E-Cell Logo" 
              className="h-12 mr-3 rounded-full no-select" 
            />
          </a>
        </div>

        <div className="flex items-center font-semibold pr-6 space-x-6 no-select">
          <button
            onClick={nav1} // Add onClick handler for login
            className="relative bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-full px-6 py-2"
          >
            LOGIN
          </button>
          <button
            onClick={nav2} // Add onClick handler for signup
            className="relative bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-full px-6 py-2"
          >
            SIGNUP
          </button>
        </div>
      </div>

      {/* Line that extends below the logo to the signup button */}
      <div className="flex justify-center mx-6">
        <div className="flex-grow h-0.5 bg-black" />
      </div>
    </div>
  );
}

export default Navbar;
