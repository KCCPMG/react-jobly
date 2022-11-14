import {useContext} from 'react';
import {Link} from 'react-router-dom';
import LoginContext from '../helpers/LoginContext';

function Home() {

  const {user} = useContext(LoginContext)

  return (
    <>
      {Object.keys(user).length > 0 
       ? <h1>Welcome back, {user.username}</h1>
       : (<div className="row justify-content-center">
            <h1>Jobly</h1>
            <Link to="/login">
              <button className="btn m-4 btn-primary">
                <h4>Log In</h4>
              </button>
            </Link>
            <Link to="/register">
              <button className="btn m-4 btn-primary">
                <h4>Sign Up</h4>
              </button>
            </Link>
          </div>
       )
      }
    
    
    </>
  )

}

export default Home;