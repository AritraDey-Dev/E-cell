import React from 'react';
import JobCard from './JobCard'; // Import the JobCard component

function ApplyPage() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center no-select">
      <h1 className="text-5xl font-barlow font-semibold text-black mb-40 text-center ">
  Explore Exciting Job Opportunities and Apply Now!

  <div className="">
    
  </div>
</h1>
      
      <div className="w-full px-10" >
        {/* Render multiple JobCard components */}
        <JobCard 
          title="Frontend & Backend"
          Company="Trail"
          location="Remote"
          skills={["React", "CSS", "JavaScript"]}
          postedOn="2024-10-12"
          job_link="https://forms.gle/AddtW8vLCkVfSrjD7"
          stipend="Stipend: Rs.10,000 - Rs.15,000"
        />
        <JobCard 
          title="Marketing"
          Company="ParadigmIT"
          location="Hybrid"
          skills={["Product Management"]}
          postedOn="2024-11-14"
          job_link="https://docs.google.com/forms/d/e/1FAIpQLSeMw06nWa4naJ-2oe_akyKRYxNa6JX7y0lqefch1S2TysaRVA/viewform?usp=sf_link"
          stipend="Stipend: Rs.10,000"
        />
      </div>
    </div>
  );
}

export default ApplyPage;