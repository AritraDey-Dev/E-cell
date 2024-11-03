import React from 'react';
import dayjs from "dayjs";
import { FaClock } from "react-icons/fa";
import PropTypes from 'prop-types';

function JobCard({ title, Company, location, skills = [], postedOn, job_link,stipend }) {
  const date1 = dayjs(Date.now());
  const diffday = date1.diff(postedOn, 'day');

   return (
    <div className="font-roboto1 p-2 max-w-sm flex items-center">
      <div className="bg-black rounded-[60px] p-8 text-white flex flex-col h-full">
        <h1 className="text-2xl font-bold mb-4">{title} - {Company}</h1>
        <div className="flex gap-2 mb-4">
          {skills.map((skill) => (
                <button key={skill} className="bg-gray-800 rounded-full px-4 py-2 text-white flex items-center">
                  <span className="mr-2">•</span> {skill}
              </button>
              ))}
        </div>
        <p className="mb-4">Intern • Fresher • {location}</p>
        <p className="mb-4">{stipend}</p>
        <p className="text-gray-700 flex items-center gap-1">
            <FaClock /> Posted {diffday} {diffday > 1 ? "days" : "day"} ago
          </p>
        <div className="mt-auto flex justify-end">
        <a href={job_link}>
          <button className="font-roboto1 bg-white text-black px-5 py-2 rounded-full 
                           hover:shadow-lg hover:scale-105 transition 
                           duration-300 flex items-center font-bold">
            APPLY
          </button>
        </a>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  Company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  postedOn: PropTypes.string.isRequired,
  job_link: PropTypes.string.isRequired,
};

export default JobCard;
