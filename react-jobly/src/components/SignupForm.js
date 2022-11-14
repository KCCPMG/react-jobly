import LoginContext from "../helpers/LoginContext";
import {useState, useContext} from 'react';
import {Navigate} from 'react-router-dom';

function SignupForm() {

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {user, signup} = useContext(LoginContext);

  const isUser = Object.keys(user).length > 0;

  const localSignup = (e) => {
    e.preventDefault();
    const userObj = {
      username, firstName, lastName, password, email
    }
    signup(userObj)
  }

  const clearForm = (e) => {
    e.preventDefault();
    setUsername("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
  }

  return (
    <>
      {isUser
      ? <Navigate to="/" /> 
      :  (<form className="container m-auto p-5 Signup-form">
          <div className="form-group row justify-content-around">
            <label className="col-6 col-form-label">Username</label>
            <div className="col-6">
              <input 
                className="form-control"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />
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
            <button className="btn btn-primary btn-dark-outline col-4" onClick={localSignup}>
              Sign Up
            </button>
            <button className="btn btn-primary btn-dark-outline col-4" onClick={clearForm}>
              Clear Form
            </button>
          </div>
        </form>)
    
    }
    </>
  )

}

export default SignupForm;