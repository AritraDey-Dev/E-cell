import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // User icon
import { FaCircleUser } from "react-icons/fa6"; // Circle user icon
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa'; 
const Login = () => {
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
  const navToRegister=()=>{
    navigate('/Registerpage');
  }
  return (
    <div className="font-poppins flex flex-col items-center justify-center min-h-screen text-white">
      {/* Logo Section */}
      <div>
        <img 
          src="images/ecell-logo.png" // Replace with your logo path
          alt="Logo"
          className="logo mb-16 w-20 h-20 rounded-full" // Added class for animation
        />
      </div>
      <form onSubmit={handleSubmit} className="login-box"> {/* Added class for animation */}
        <h1 className="text-2xl font-bold mb-16 text-center flex">
          <button 
            onClick={navToHome} 
            className="bg-black text-white mr-6 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <FaArrowCircleLeft className="h-10 w-10" />
          </button> 
          <span className="border border-white rounded-full px-10 py-2 inline-block flex justify-end">
            <FaUser className="mr-4 mt-1 text-3xl" />
            LOGIN
          </span>
        </h1>

        <div className="mb-6 flex items-center">
          <FaCircleUser className="mr-4 text-white-400 text-2xl" />
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            placeholder="Enter Roll Number"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>
        <div className="mb-6 flex items-center">
          <RiLockPasswordFill className="mr-4 text-white-400 text-2xl" />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="bg-white text-gray-700 rounded-full w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-grey-500"
          />
        </div>

        <div className="flex items-center justify-center mb-4">
          <button
            type="submit"
            className="font-poppins bg-white hover:bg-gray-300 active:bg-gray-400 text-black font-bold py-2 px-10 rounded-full flex items-center justify-center transition duration-200"
          >
            LOGIN
          </button>
        </div>
        <div className="text-center mt-4">
          <span>New user? </span>
          <button className="text-white-500 hover:underline" onClick={navToRegister}>
            REGISTER now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;