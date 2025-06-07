import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';

interface Job {
  title: string;
  Company: string;
  location: string;
  skills: string[];
  postedOn: string | number;
  job_link: string;
  stipend: string;
}

const ApplyPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const mockJobs: Job[] = [
      {
        title: "Frontend Developer",
        Company: "Tech Corp",
        location: "Remote",
        skills: ["React", "TypeScript", "CSS"],
        postedOn: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
        job_link: "#",
        stipend: "$5000/month"
      },
      {
        title: "Backend Developer",
        Company: "Data Systems",
        location: "In-Office",
        skills: ["Node.js", "Python", "MongoDB"],
        postedOn: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
        job_link: "#",
        stipend: "$6000/month"
      }
    ];
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />
      <div className="mt-8">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default ApplyPage;
