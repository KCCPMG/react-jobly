import {useState, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import LoginContext from '../helpers/LoginContext';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {user, login} = useContext(LoginContext);

  const localLogin = (e) => {
    e.preventDefault();
    login(username, password);
  }

  useEffect(function() {
    if (user.username) {
      navigate('/');
    }
  }, [user])

  return (
    // <LoginContext.Consumer>

      <form className="container m-auto p-5 Companies-form">
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
        <div className="form-group row mt-1">
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
        <div className="form-group row mt-3 justify-content-center">
          <button className="col-3 btn btn-primary" onClick={localLogin}>
            Login
          </button>
        </div>
      </form>
    // </LoginContext.Consumer>
  )
}

export default Login;