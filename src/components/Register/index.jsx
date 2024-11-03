import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // User icon
import { FaCircleUser } from "react-icons/fa6"; // Circle user icon
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import './Styles.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa'; 

const Register = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Roll Number:', rollNumber);
    console.log('Password:', password);
  };
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="font-poppins mb-20 flex flex-col items-center justify-center min-h-screen text-white">
      {/* Logo Section */}
      <img 
        src="images/ecell-logo.png" // Replace with your logo path
        alt="Logo"
        className="logo mb-16 w-20 h-20 rounded-full" // Added class for animation
      />
      
      <form onSubmit={handleSubmit} className="bg-black rounded-[54px] shadow-lg p-10 w-full max-w-sm"> {/* Adjust max-w-md to max-w-sm for slimmer width */}
        <h1 className="text-2xl font-bold mb-16 text-center flex items-center justify-center heading">
        <button 
            onClick={navToHome} 
            className="bg-black text-white mr-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <FaArrowCircleLeft className="h-10 w-10" />
          </button> 
          
          <span className="border border-white rounded-full px-10 py-4 inline-block flex justify-end">
            <FaUser className="mr-4 mt-1 text-3xl" />
            SIGN UP
          </span>
        </h1>

        {/* Input fields */}
        <div className="input-container mb-6 flex items-center">
          <FaCircleUser className="mr-4 text-white-400 text-2xl" />
          <input
            type="text"
            id="name"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter name"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="input-container mb-6 flex items-center">
          <MdOutlineDriveFileRenameOutline className="mr-4 text-white-400 text-2xl" />
          <input
            type="text"
            id="rollnumber"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter roll number"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="input-container mb-6 flex items-center">
          <IoIosMail className="mr-4 text-white-400 text-2xl" />
          <input
            type="email"
            id="email"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter personal mail ID"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="input-container mb-6 flex items-center">
          <RiLockPasswordFill className="mr-4 text-white-400 text-2xl" />
          <input
            type="password"
            id="password"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter password"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="input-container mb-6 flex items-center">
          <RiLockPasswordFill className="mr-4 text-white-400 text-2xl" />
          <input
            type="password"
            id="confirmPassword"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Confirm password"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="font-poppins bg-white hover:bg-gray-300 active:bg-gray-400 text-black font-bold py-2 px-10 rounded-full flex items-center justify-center transition duration-200 button"
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
