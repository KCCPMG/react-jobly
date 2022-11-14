import {useContext, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import LoginContext from '../helpers/LoginContext';
import Loading from './Loading';

function Logout() {

  const {user, logout} = useContext(LoginContext);

  const isUser = Object.keys(user).length > 0;

  useEffect(function(){
    if (isUser) {
      logout();
    }
  },[])
  

  return (
    <>
      {isUser ? <Loading /> : <Navigate to="/" />}
    </>
  )

}

export default Logout;