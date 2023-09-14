import React, { useState, useEffect } from "react";

const Todolist = () => {
  // Initialize storageJobs as an empty array if it's null
  const storageJobs = JSON.parse(localStorage.getItem("jobs")) || [];

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(storageJobs);

  const handleAdd = () => {
    setJobs((prevJobs) => {
      const newJobs = [...prevJobs, job];

      // Local storage only accepts data as strings
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
