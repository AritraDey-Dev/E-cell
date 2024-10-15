import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 no-select">
      <div className="max-w-4xl mx-auto px-4">
        <div id="contact" className="flex flex-col md:flex-row justify-between items-start">
          {/* Contact Us Section */}
          <div className="mb-4 md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:contact@ecell-nitt.org" className="text-gray-300 hover:text-[#fdcf41]">contact@ecell-nitt.org</a></p>
            <p>Phone: <span className="text-gray-300">+91 8529312938</span></p>
            <p>Address: 
              <a href='https://maps.app.goo.gl/ggtiSJF4pDNUHaHq5'
              target='_blank'
              rel="noopener noreferrer"
              className='text-gray-200 ml-1 hover:underline'>National Institute of Technology, Trichy</a>
            </p>
          </div>

          <div className="mb-4 md:w-1/3 text-center">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://www.facebook.com/ecell.nit.trichy/" rel="noopener noreferrer" target='_blank' aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-[#fdcf41] text-2xl transition duration-300" />
              </a>
              <a href="https://x.com/ecell_nitt" target='_blank' rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-blue-400 hover:text-[#fdcf41] text-2xl transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/ecellnitt/mycompany/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-blue-700 hover:text-[#fdcf41] text-2xl transition duration-300" />
              </a>
              <a href="https://www.instagram.com/ecellnitt/" target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-pink-500 hover:text-[#fdcf41] text-2xl transition duration-300" />
              </a>
              <a href="https://www.youtube.com/@ECellNITTrichy" target='_blank' rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-pink-500 hover:text-[#fdcf41] text-2xl transition duration-300" />
              </a>
            </div>
          </div>

          {/* E-Cell Website Section */}
          <div className="mb-4 md:w-1/3 text-right">
            <h3 className="text-lg font-bold">E-CELL</h3>
            <a href="https://ecell-nitt.org/#" className="hover:text-gray-400 mt-2 inline-block">
              <img src="images/LOGO-FINAL.png" alt="E-Cell Website" className="h-16 w-auto mt-2 transition-transform transform hover:scale-105" />
            </a>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">
            Made with <BsFillHeartFill className="inline text-red-500" /> by E-Cell WebOps Team
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} E-CELL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
