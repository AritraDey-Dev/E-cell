"use client";

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io'; // Importing the dropdown icon
import { useNavigate } from 'react-router-dom';

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const arrowSvg = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8574 11.6884C11.2716 11.6901 11.6088 11.3556 11.6104 10.9414L11.637 4.19146C11.6386 3.77725 11.3042 3.44014 10.89 3.43851C10.4757 3.43687 10.1386 3.77133 10.137 4.18554L10.1134 10.1855L4.1134 10.1618C3.69919 10.1602 3.36208 10.4947 3.36045 10.9089C3.35881 11.3231 3.69327 11.6602 4.10748 11.6618L10.8574 11.6884ZM0.467583 1.52824L10.328 11.4667L11.3928 10.4102L1.53242 0.471765L0.467583 1.52824Z" fill="white" />
    </svg>
  );

  const navToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <>
      {/* Footer for large devices */}
      <footer className="hidden lg:block font-roboto1 rounded-[64px] bg-black text-white py-8 m-8 md:max-full">
        <div className="container mx-auto px-8">
          <h2 className="font-alexandria text-2xl mb-4">..AND MORE ON THE WAY!</h2>
          <div className="mt-2 border-t border-b border-white-400 flex justify-end text-left">
            {/* Contact Section */}
            <div className="flex flex-col p-6 border-t border-b border-white-400 sm:border-l border-r border-white-400">
              <h3 className="font-bold text-xl mb-4 p-4">CONTACT</h3>
              <ul className="font-alexandria font-light text-md md:text-base">
                <li className="flex items-center mb-2">{arrowSvg} <span className="ml-2">PHONE NO</span></li>
                <li className="flex items-center mb-2">{arrowSvg} <span className="ml-2">LOCATION</span></li>
                <li className="flex items-center">{arrowSvg} <span className="ml-2">WEBMAIL</span></li>
              </ul>
            </div>
            {/* Navigation Section */}
            <div className="flex flex-col sm:text-right ml-6">
              <h3 className="font-bold text-xl mt-6 mb-4 p-4">NAVIGATION</h3>
              <ul className="font-alexandria font-light ml-4 text-sm md:text-base">
                <li className="mb-2 cursor-pointer" onClick={navToHome}>HOME</li>
                <li className="mb-2 cursor-pointer" onClick={navToHome}>ABOUT US</li>
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="flex mt-4 justify-between items-center">
            <p className="font-alexandria text-sm md:text-base flex items-center">
              <span className="border-r border-white-400 pr-4">© MADE BY ECELL</span>
              {/* Social Media Icons */}
              <div className="flex space-x-4 ml-4">
                <a href="https://www.youtube.com/@ECellNITTrichy" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/ecell.nit.trichy/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/ecellnitt/mycompany/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/ecellnitt/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </p>
            <div className="flex items-center">
              <div className="border-l border-white-400 pl-4">
                <a href="https://nitt.edu/" aria-label="NITT Website" target="_blank" rel="noopener noreferrer">
                  <img src="images/nit-logo.png" alt="NIT Logo" className="h-6 w-6 rounded-full" />
                </a>
              </div>
              <a href="https://ecell-nitt.org/#" aria-label="E-Cell Website" target="_blank" rel="noopener noreferrer">
                <img src="images/ecell-logo.png" alt="Ecell Logo" className="h-6 w-6 ml-2 rounded-full" />
              </a>
            </div>
          </div>
          <div className="border-t border-white-400 mt-2 mb-4"></div>
        </div>
      </footer>

      {/* Footer for small devices */}
      <footer className="block lg:hidden font-roboto1 rounded-t-[64px] bg-black text-white p-4">
        <div className="container mx-auto px-4">
          {/* Collapsible Sections for Small Devices */}
          <div className="mb-4">
            <div className="border-t border-white-400 mb-2 mt-4"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsContactOpen(!isContactOpen)}>
              <h3 className="text-lg">CONTACT</h3>
              <IoMdArrowDropdown /> {/* Dropdown icon */}
            </div>
            {isContactOpen && (
              <ul className="font-alexandria font-light text-sm mt-2 border-b border-white-400 pb-2">
                <li className="flex items-center mb-2">{arrowSvg} <span className="ml-2">PHONE NO</span></li>
                <li className="flex items-center mb-2">{arrowSvg} <span className="ml-2">LOCATION</span></li>
                <li className="flex items-center">{arrowSvg} <span className="ml-2">WEBMAIL</span></li>
              </ul>
            )}
          </div>

          <div>
            <div className="border-t border-white-400 mb-2"></div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
              <h3 className="text-lg mb-2">NAVIGATION</h3>
              <IoMdArrowDropdown /> {/* Dropdown icon */}
            </div>
            {isNavOpen && (
              <ul className="font-alexandria font-light text-sm mt-2">
                <li className="mb-2 cursor-pointer" onClick={navToHome}>HOME</li>
                <li className="mb-2 cursor-pointer" onClick={navToHome}>ABOUT US</li>
              </ul>
            )}
          </div>
          <div className="border-t border-white-400 mb-2"></div>
          {/* Footer bottom */}
          <div className="flex mt-4 justify-between items-center">
            <p className="font-alexandria text-sm flex items-center">
              <span className="border-r border-white-400 pr-4">© MADE BY ECELL</span>
              {/* Social Media Icons */}
              <div className="flex space-x-2 ml-4">
                <a href="https://www.youtube.com/@ECellNITTrichy" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/ecell.nit.trichy/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/ecellnitt/mycompany/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/ecellnitt/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </p>
            <div className="flex items-center">
              <a href="https://nitt.edu/" aria-label="NITT Website" target="_blank" rel="noopener noreferrer">
                <img src="images/nit-logo.png" alt="NITT Logo" className="h-5 w-5 ml-2 rounded-full" />
              </a>
              <a href="https://ecell-nitt.org/#" aria-label="E-Cell Website" target="_blank" rel="noopener noreferrer">
                <img src="images/ecell-logo.png" alt="Ecell Logo" className="h-5 w-5 ml-2 rounded-full" />
              </a>
            </div>
          </div>
          <div className="border-t border-white-400 mb-2 mt-4"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
