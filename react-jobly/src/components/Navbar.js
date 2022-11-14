import {Link} from 'react-router-dom';
import LoginContext from '../helpers/LoginContext';
import {useContext} from 'react';


function Navbar() {

  const {user} = useContext(LoginContext);

  return (
    <nav className="Navbar navbar">
      <div className=".navbar-brand">
        <h3>Jobly</h3>
      </div>

      <ul className="nav mr-auto mt-2 mt-lg-0">
        {user.username 
        ? <>
            <li className="nav-item">
              <Link to="/companies" className="Navbar-Link nav-link">
                <h6>Companies</h6>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/jobs" className="Navbar-Link nav-link">
                <h6>Jobs</h6>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/profile" className="Navbar-Link nav-link">
                <h6>Profile</h6>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/logout" className="Navbar-Link nav-link">
                <h6>Log Out</h6>
              </Link>
            </li>
          </>
        :
         <>
          <li className='nav-item'>
            <Link to="/login" className="Navbar-Link nav-link">
              <h6>Log In</h6>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/register" className="Navbar-Link nav-link">
              <h6>Sign Up</h6>
            </Link>
          </li>
         </>
        }
      </ul>
    </nav>
  )
}

export default Navbar;