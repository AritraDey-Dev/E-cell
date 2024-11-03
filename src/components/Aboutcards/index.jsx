function AboutCards() {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        
        {/* First Box */}
        <div className="bg-black rounded-[36px] text-white p-6 h-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-4 p-2 border border-white rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            What is SIP?
          </h2>
          <p>
            An opportunity to connect with great opportunities and gain real-world exposure to startups!
          </p>
        </div>

        {/* Second Box */}
        <div className="bg-black rounded-[36px] text-white p-6 h-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-4 p-2 border border-white rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            What we do?
          </h2>
          <p>
            We create opportunities for students that go beyond internships, offering real-world experience in the startup ecosystem!
          </p>
        </div>

        {/* Third Box */}
        <div className="bg-black rounded-[36px] text-white p-6 h-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
          <h2 className="font-bold text-lg mb-4 p-2 border border-white rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Explore More
          </h2>
          <p>
            We create opportunities for students that go beyond just internships!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
