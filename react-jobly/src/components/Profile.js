import React, {useState, useContext} from 'react';
import JoblyApi from '../api';
import LoginContext from '../helpers/LoginContext'; 
import useProtect from '../helpers/useProtect';

function Profile() {
  
  const {user} = useContext(LoginContext);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);

  useProtect(user);

  const submitChanges = (e) => {
    e.preventDefault();
    JoblyApi.editUser(user.username, {
      firstName,
      lastName,
      password,
      email
    })
  }


  return (
    <>
      <form className="container m-auto p-5 Companies-form">
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">Username</label>
          <div className="col-6">
            <p>{user.username}</p> 
          </div>
        </div>
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">First Name</label>
          <div className="col-6">
            <input 
              className="form-control"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">Last Name</label>
          <div className="col-6">
            <input 
              className="form-control"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">Password</label>
          <div className="col-6">
            <input 
              className="form-control"
              type="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row justify-content-around">
          <label className="col-6 col-form-label">Email</label>
          <div className="col-6">
            <input 
              className="form-control"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group mt-2 row justify-content-around">
          <button className="btn btn-primary btn-dark-outline col-4" onClick={submitChanges}>
            Submit Changes
          </button>
        </div>
      </form>
    </>
  )
}

export default Profile