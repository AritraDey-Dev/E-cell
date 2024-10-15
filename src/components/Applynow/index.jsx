import React from 'react';
import { useNavigate } from 'react-router-dom';

function Applynow() {
  const navigate = useNavigate(); // Use useNavigate correctly

  const nav = () => {
    navigate('/apply'); // Correctly navigate to the /apply route
  };

  return (
    <div className="flex justify-center mt-6 no-select">
      <button
        className="bg-[#f2b700] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-[#e0a200] focus:outline-none"
        onClick={nav} // Make sure this is a function reference
      >Apply Now
      </button>
    </div>
  );
}

export default Applynow;
