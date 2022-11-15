import {useContext} from 'react';
import LoginContext from "../helpers/LoginContext";


function Job({id, title, salary, equity}) {

  const {apply, user} = useContext(LoginContext);

  const localApply = (e) => {
    e.preventDefault();
    apply(id);
  }

  const checkApplied = user.applications.includes(id);

  return (
    <div className="Job card col-8 m-auto mt-2 p-3">
      <h2>{title}</h2>
      <p>{salary ? `Salary: ${salary}` : "No Salary Listed"}</p>
      <p>{equity>0 ? `Equity: ${equity}` : "No Equity Listed"}</p>
      <div className="row justify-content-center">
        {checkApplied 
          ? <span className="badge bg-info bg-outline-dark col-4">
              <h6>Applied!</h6>
            </span>
          : <button className="Job-button btn btn-primary btn-outline-dark col-4" onClick={localApply}>
              <h6>Apply</h6>
            </button>
        }
      </div>
      
    </div>
  )
}

export default Job;