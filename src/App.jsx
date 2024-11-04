import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Description from './components/Description';
import Applynow from './components/Applynow';
import ApplyPage from './components/ApplyPage';
import ForgotPassword from './components/forgotPassword';
import Login from './components/login';
import Signup from './components/signup';
import VerifyOtp from './components/verify-email';

function Home() {
  return (
    <div>
      <Header />
      <Description />
      <Applynow />
    </div>
  );
}

function App() {
  useEffect(() => {
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetElement = document.querySelector(this.getAttribute('href'));
          const offset = 100; // Adjust this value to move the scroll down
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      });
    };

    smoothScroll();
  }, []);

  return (
    <>
      <Navbar /> {/* Navbar will stay on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyPage />} />
        
        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer /> {/* Footer will stay on all pages */}
    </>
  );
}

export default App;
