import React, {useState, useEffect, useContext} from 'react';
import JoblyApi from '../api.js';
import Job from './Job.js';
import LoginContext from '../helpers/LoginContext.js';
import useProtect from '../helpers/useProtect.js';


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const {user} = useContext(LoginContext);
  useProtect(user);
  
  useEffect(function() {
    JoblyApi.getJobs()
    .then(apiJobs => {
      setJobs(apiJobs);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      {jobs.map(job => <Job 
        key={job.id}
        id={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
      />)}
    </div>
  )
}

export default Jobs;