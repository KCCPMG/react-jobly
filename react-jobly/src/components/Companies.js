import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import JoblyApi from '../api.js';
import Loading from './Loading.js';
import useProtect from '../helpers/useProtect.js';
import LoginContext from '../helpers/LoginContext.js';

function Companies() {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [searchMinEmployees, setSearchMinEmployees] = useState(0);
  const [searchMaxEmployees, setSearchMaxEmployees] = useState(0);
  const [searchName, setSearchName] = useState("");

  const {user} = useContext(LoginContext);

  useProtect(user);

  // Run only on load
  useEffect(function() {
    JoblyApi.request('companies')
    .then(data => {
      setIsLoading(false);
      setCompanies(data.companies);
    })
  }, [])

  const submit = (e) => {
    e.preventDefault();
    const searchObj = {}
    if (searchMinEmployees > 0) searchObj.minEmployees = searchMinEmployees;
    if (searchMaxEmployees > 0) searchObj.maxEmployees = searchMaxEmployees;
    if (searchName.length > 0) searchObj.name = searchName;

    JoblyApi.searchCompanies(searchObj)
    .then(data => {
      setCompanies(data.companies);
      setIsLoading(false);
    })
  }

  return(
    <div className="Companies container">
      <h1>Companies</h1>
      <h6>Search</h6>
      <form className="container m-auto p-5 Companies-form">
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">Minimum Employees</label>
          <div className="col-6">
            <input 
              className="form-control"
              type="number" 
              value={searchMinEmployees} 
              onChange={(e) => setSearchMinEmployees(e.target.value)} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">Maximum Employees</label>
          <div className="col-6">
            <input 
              className="form-control"
              type="number" 
              value={searchMaxEmployees} 
              onChange={(e) => setSearchMaxEmployees(e.target.value)} 
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-6 col-form-label">Name</label>
          <div className="col-6">
            <input 
              className="form-control col-6"
              placeholder="Name"
              value={searchName} 
              onChange={(e) => setSearchName(e.target.value)} 
            />
          </div>
        </div>
        <div className="form-group mt-2 row justify-content-around">
          <button 
            onClick={submit}
            className="Companies-search-button btn btn-primary btn-outline-dark col-5"            
          >
            Search
          </button>
          <button className="Companies-clear-search-button btn btn-secondary btn-outline-dark col-5">
            Clear
          </button>
        </div>
      </form>
      {isLoading
        ? <Loading />
        : companies.length > 0
          ? companies.map(company => <Company 
              key={company.handle}
              handle={company.handle} 
              name={company.name}
              description={company.description}
              logoUrl={company.logoUrl}
              numEmployees={company.numEmployees}
            />)
          : <h6>No companies found</h6>
      }
    </div>
  )
}

function Company({handle, name, description, logoUrl, numEmployees}) {
  return (
    <div className="Company card col-8 m-auto p-3">
      <div className="Company-header-row card-title d-flex justify-content-around p-2">
        <Link to={'/companies/' + handle}><h2>{name}</h2></Link>
        <img src={logoUrl} alt={name} />
      </div>
      <p>{description}</p>
      <p>{numEmployees} Employees</p>
    </div>
  )
}

export default Companies;