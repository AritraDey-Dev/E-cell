import React from 'react';
import JobCard from './JobCard'; // Import the JobCard component

function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-black text-black mb-10 text-center ">
  Explore Exciting Job Opportunities and Apply Now!
</h1>
      
      <div className="w-full px-10" >
        {/* Render multiple JobCard components */}
        <JobCard 
          title="Frontend Developer"
          Company="TechStart"
          location="Remote"
          skills={["React", "CSS", "JavaScript"]}
          postedOn="2024-09-25"
          job_link="https://applyhere.com"
        />
        <JobCard 
          title="Backend Developer"
          Company="Innovatech"
          location="On-Site"
          skills={["Node.js", "Express", "MongoDB"]}
          postedOn="2024-09-28"
          job_link="https://applyhere.com"
        />
        <JobCard 
          title="Full Stack Developer"
          Company="DevCorp"
          location="Hybrid"
          skills={["React", "Node.js", "GraphQL"]}
          postedOn="2024-10-01"
          job_link="https://applyhere.com"
        />
      </div>
    </div>
  );
}

export default ApplyPage;
