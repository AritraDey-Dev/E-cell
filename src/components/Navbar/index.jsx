import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [sectionStack, setSectionStack] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for the token in localStorage when the component mounts
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerHeight / 10;
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;

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
      setSectionStack(sectionStack.slice(0, -1));
      scrollToSection(previousSection);
    } else {
      scrollToSection("about-us");
    }
  };

  const scrollToContactUs = () => {
    scrollToSection("contact");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      // Call the logout API endpoint
      const response = await axios.post("http://localhost:5000/api/auth/logout");
      
      if (response.data.success) {
        // Remove token from localStorage on successful logout
        localStorage.removeItem("token");
        setIsLoggedIn(false); // Update state to reflect logout
        navigate("/"); // Redirect to home or login page
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Optionally, show a notification to the user about the error
    }
  };

  return (
    <div className="h-20 z-50 flex items-center justify-between w-full sticky top-0 bg-[#b9b9b9] bg-opacity-10 backdrop-blur-lg">
      <div className="flex items-center pl-6 no-select">
        <a href="https://nitt.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/nit-logo.png" alt="NIT Logo" className="h-12 mr-3 pointer no-select" />
        </a>
        <a href="https://ecell-nitt.org/#" target="_blank" rel="noopener noreferrer">
          <img src="/LOGO-FINAL.png" alt="E-Cell Logo" className="h-12 mr-3 no-select" />
        </a>
      </div>

      <div className="flex items-center font-semibold pr-6 space-x-6 no-select">
        <a onClick={scrollToAboutUs} className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer">
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>
        <a onClick={scrollToContactUs} className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer">
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>

        {isLoggedIn ? (
          <a onClick={handleLogout} className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer">
            Logout
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>
        ) : (
          <a onClick={handleLoginRedirect} className="relative text-gray-900 hover:text-black transition duration-300 group cursor-pointer">
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#f2b700] group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>
        )}

        <div className="ml-6 hidden lg:flex space-x-4"></div>
      </div>
    </div>
  );
}

export default Navbar;
