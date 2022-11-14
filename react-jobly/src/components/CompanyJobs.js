import React, {useState, useEffect, useContext} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import JoblyApi from '../api.js';
import Job from './Job.js';
import LoginContext from '../helpers/LoginContext.js';
import useProtect from '../helpers/useProtect.js';

function CompanyJobs() {
  const [validCompany, setValidCompany] = useState(true);
  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [jobs, setJobs] = useState([])

  const {handle} = useParams();
  const {user} = useContext(LoginContext);

  useProtect(user);

  useEffect(function() {
    JoblyApi.getCompany(handle)
    .then(data => {
      setName(data.name);
      setLogo(data.logo);
      setJobs(data.jobs);
    })
    .catch(err => {
      console.log(err);
      setValidCompany(false);
    });
  }, [])

  if (!validCompany) return <Navigate to="/" />

  return (
    <div className="CompanyJobs">
      <h1>{name}</h1>
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

export default CompanyJobs;