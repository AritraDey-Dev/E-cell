import React from 'react';
import dayjs from "dayjs";
import { FaClock } from "react-icons/fa";
import PropTypes from 'prop-types';

function JobCard({ title, Company, location, skills = [], postedOn, job_link, stipend }) {
  const date1 = dayjs(Date.now());
  const diffday = date1.diff(postedOn, 'day');

  return (
    <div className="mx-10 mb-4 ">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-4 bg-[#fffcfccb] rounded-md border border-black shadow-lg transition-transform hover:scale-105 hover:border-[#f2b700]">
        <div className="flex flex-col items-start gap-3 no-select">
          <h1 className="text-lg font-semibold">{title} - {Company}</h1>
          <p className="font-bold text-black">{stipend}</p>
          <p>Intern &#x2022; Fresher &#x2022; {location}</p>
          <div className="flex flex-wrap items-center gap-2">
            {skills.map((skill) => (
              <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black flex items-center gap-2">
                <span className="text-[#f2b700]">•</span> {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-4 lg:mt-0 no-select">
          <p className="text-gray-700 flex items-center gap-1">
            <FaClock /> Posted {diffday} {diffday > 1 ? "days" : "day"} ago
          </p>
          <a href={job_link}>
            <button className="text-[#f7c42e] border border-[#f7c42e] px-6 py-2 rounded-md transition duration-700 ease-in-out hover:bg-[#f7c42e] hover:text-white hover-delay w-full lg:w-auto">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  Company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  postedOn: PropTypes.string.isRequired,
  job_link: PropTypes.string.isRequired,
};

export default JobCard;
