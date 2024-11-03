import React from 'react';
import JobCard from '../JobCard';
import { FaArrowCircleLeft } from 'react-icons/fa'; // Import the left arrow icon
import { useNavigate } from 'react-router-dom';

function ApplyPage() {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-IBM text-5xl font-bold font-black mb-10 ml-4 mr-4 text-center">
        Explore Exciting Job Opportunities and Apply Now!
      </h1>

      {/* Back to Home Button */}
      <button 
        onClick={navToHome} 
        className="absolute top-4 left-4 bg-white text-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
      >
        <FaArrowCircleLeft className="h-10 w-10" />
      </button>

      <div className="w-full px-6">
        {/* Render multiple JobCard components */}
        <JobCard 
          title="WEB DEVELOPMENT"
          Company="Trail"
          location="Remote"
          skills={["React", "CSS", "JavaScript"]}
          postedOn="2024-10-23"
          job_link="https://forms.gle/AddtW8vLCkVfSrjD7"
          stipend="Stipend: Rs.10,000 - Rs.15,000"
        />
      </div>
    </div>
  );
}

export default ApplyPage;
