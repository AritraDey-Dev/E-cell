import React from 'react'; 
import { useNavigate } from 'react-router-dom';

const Applynow = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate('/apply'); // Correctly navigate to the /apply route
  };
  return (
    <div className="flex justify-center items-center w-full h-full p-4 rounded-[36px]">
      <div className="bg-black text-white rounded-[64px] p-16 shadow-lg flex flex-col"> {/* Increased padding */}
        <h1 className="font-roboto text-5xl font-bold mb-8">WHAT ARE YOU WAITING <br/>FOR?</h1> {/* Increased font size and margin */}

        <div className="flex justify-end"> {/* Align button to the right */}
          <button 
            onClick={nav}
            className="font-montserrat bg-white text-black px-10 py-5 rounded-[36px] 
                       hover:bg-gray-200 hover:shadow-lg hover:scale-105 transition 
                       duration-300 flex items-center">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M14 34L34 14M34 14H14M34 14V34" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            APPLY NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applynow;
