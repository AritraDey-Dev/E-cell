import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Email: support@ecell.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-blue-500" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-blue-400 hover:text-blue-300" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 hover:text-blue-600" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-pink-500 hover:text-pink-400" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#internships" className="hover:text-gray-400">Internships</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} E-CELL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
