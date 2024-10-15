import React from 'react';

function Description() {
  return (
    <div
      id="about-us"
      className=" about-section max-w-4xl mx-auto p-4 sm:p-6 mt-12 backdrop-blur-md bg-white/30 rounded-lg shadow-lg border border-gray-200 hover:border-[#f2d600] transition-colors duration-300 no-select"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
        About Us
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-700 mb-6">
        At SIP, we create opportunities that go beyond internships.<br></br> it's your launchpad into the startup ecosystem!
      </p>
      {/* What is SIP Section */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">What We Do</h3>
        <p className="text-base sm:text-lg text-gray-700">
          SIP links ambitious students with dynamic startups, offering real-world exposure and a chance to make an impact.
        </p>
      </div>
      {/* Why Choose SIP Section */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Why Join Us?</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
          <li>Step into the world of startups and innovation</li>
          <li>Build your portfolio with meaningful work</li>
          <li>Collaborate with forward-thinking minds</li>
        </ul>
      </div>

      {/* Additional Details Box */}
      <div className="mt-4">
        <h2 className="text-md font-bold sm:text-xl  text-gray-900 mb-2">More to Explore</h2>
        <p className="text-base sm:text-0.5xl text-gray-700">
          Beyond internships, we offer mentorship and skill-building workshops, setting you up for a bright future in tech and business.
        </p>
      </div>
    </div>
  );
}

export default Description;
