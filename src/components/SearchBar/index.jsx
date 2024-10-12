import { useState, useEffect } from "react";


function SearchBar({ jobs, setFilteredJobs }) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
    });

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        if (!Array.isArray(jobs)) return; // Ensure jobs is an array

        const filtered = jobs.filter((job) => {
            const titleMatch = jobCriteria.title ? job.title === jobCriteria.title : true;
            const locationMatch = jobCriteria.location ? job.location === jobCriteria.location : true;
            return titleMatch && locationMatch;
        });
        setFilteredJobs(filtered);
    }, [jobCriteria, jobs, setFilteredJobs]);

    return (
        <div className="flex gap-8 my-10 justify-center px-10">
            <select
                onChange={handleChange}
                name="title"
                value={jobCriteria.title}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2b700]"
            >
                <option value="" disabled hidden>
                    Role
                </option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Data Scientist">Data Scientist</option>
            </select>
            <select
                onChange={handleChange}
                name="location"
                value={jobCriteria.location}
                className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2b700]"
            >
                <option value="" disabled hidden>
                    Location
                </option>
                <option value="In-Office">In-Office</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <button
                onClick={() => {}}
                className="w-56 bg-[#f2b700] text-white font-bold rounded-md hover:bg-[#e0a900] transition"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
