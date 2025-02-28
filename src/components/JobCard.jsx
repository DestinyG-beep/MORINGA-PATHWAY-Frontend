import React from "react";
import { Button } from "./pages/Button/Button";

export const JobCard = ({ logo, title, company, timeAgo, category, jobType, salary, location }) => {
  return (
    <div className="w-[800px] p-6 shadow-md bg-white rounded-xl">
      <div className="flex justify-between">
        <span className="bg-gray-100 px-3 py-1 rounded-lg text-green-500 text-sm">{timeAgo}</span>
        <img className="w-6 h-6" src={logo} alt={company} />
      </div>
      <div className="flex gap-5 mt-4">
        <img className="w-10 h-10" src={logo} alt="Company Logo" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex gap-4 text-gray-600 text-sm">
          <span>{category}</span>
          <span>{jobType}</span>
          <span>{salary}</span>
          <span>{location}</span>
        </div>
        <Button color="primary">Job Details</Button>
      </div>
    </div>
  );
};

export default JobCard;