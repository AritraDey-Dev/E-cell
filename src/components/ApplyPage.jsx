import React from 'react';
import JobCard from './JobCard'; // Import the JobCard component

function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center no-select">
      <h1 className="text-5xl font-barlow font-semibold text-black mb-40 text-center ">
  Explore Exciting Job Opportunities and Apply Now!
</h1>
      
      <div className="w-full px-10" >
        {/* Render multiple JobCard components */}
        <JobCard 
          title="Frontend & Backend"
          Company="Trail"
          location="Remote"
          skills={["React", "CSS", "JavaScript"]}
          postedOn="2024-09-25"
          job_link="https://forms.gle/AddtW8vLCkVfSrjD7"
          stipend="Stipend: Rs.10,000 - Rs.15,000"
        />
        
      </div>
    </div>
  );
}

export default ApplyPage;
