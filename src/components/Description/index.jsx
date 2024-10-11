import React from 'react';

function Description() {
  return (
    <div
      id="about"
      className="max-w-6xl mx-auto p-4 sm:p-8 mt-20 backdrop-blur-lg bg-white/50 rounded-lg shadow-md border-2 border-transparent hover:border-[#f2d600] transition-colors duration-300"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
        About Us
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-800 mb-6">
        We connect students with startups for real-world experience and growth. SIP is about more than learning; it's about doing.
      </p>
      {/* What is SIP Section */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">What is SIP?</h3>
        <p className="text-base sm:text-lg text-gray-800">
          SIP bridges the gap between students and startups, offering internships that provide hands-on experience. Startups benefit from fresh, motivated talent.
        </p>
      </div>
      {/* Why Choose SIP Section */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Why Choose SIP?</h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-800 space-y-2">
          <li>Gain practical experience in startups</li>
          <li>Enhance your resume with real projects</li>
          <li>Access motivated and innovative talent</li>
        </ul>
      </div>

      {/* Additional Details Box */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Additional Details</h2>
        <p className="text-base sm:text-lg text-gray-800">
          Our program not only connects students with startups but also offers mentorship and networking opportunities. Participants engage in workshops designed to develop essential skills for the evolving job market.
        </p>
      </div>
    </div>
  );
}

export default Description;
