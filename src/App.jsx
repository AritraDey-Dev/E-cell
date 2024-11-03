import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Applynow from './components/Applynow';
import ApplyPage from './components/ApplyPage';
import Aboutcards from './components/Aboutcards';
import Login from './components/Login';
import Register from './components/Register';
import Description_Design from './components/Description_Design';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); 
  return (
    <div>
      <Navbar />
      <Description_Design />
      <Aboutcards/>
      <Applynow />
      <Footer/>
    </div>
  );
}

function Loginpage(){
  return(
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  );
}

function Registerpage(){
  return(
    <div>
      <Navbar/>
      <Register/>
      <Footer/>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="flex flex-col w-full">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="Loginpage" element={<Loginpage/>} />
              <Route path="/Registerpage" element={<Registerpage/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
