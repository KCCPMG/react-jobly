import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import jwt from 'jsonwebtoken';

import LoginContext from './helpers/LoginContext';
import JoblyApi from './api';

import Router from './components/Router'



function App() {

  const [user, setUser] = useState({});

  const getTokenAndUser = (data) => {
    if (data.token) {
      JoblyApi.token = data.token;
      const decoded = jwt.decode(data.token);
      let userCopy = {...user};
      userCopy.username = decoded.username;
      localStorage.setItem('token', data.token);
      JoblyApi.getUser(decoded.username)
      .then(data => {
        console.log(data);
        setUser(data.user);
      })
    }
  }

  useEffect(function() {
    if (localStorage.token) {
      getTokenAndUser(localStorage);
    }
  }, [])

  const login = (username, password) => {
    JoblyApi.login(username, password)
    .then(data => {
      console.log(data);
      getTokenAndUser(data);
    })
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUser({});
  }

  const signup = (signupObj) => {
    JoblyApi.register(signupObj)
    .then(data => {
      if (data.token) {
        JoblyApi.token = data.token;
        const decoded = jwt.decode(data.token);
        let userCopy = {...user};
        userCopy.username = decoded.username;
        localStorage.setItem('token', data.token);
        JoblyApi.getUser(decoded.username)
        .then(data => {
          console.log(data);
          setUser(data.user);
        })
      }
    })
  }

  const apply = (jobId) => {
    JoblyApi.apply(user.username, jobId)
    .then(data => {
      if (data.applied) {
        const applications = [...user.applications]
        applications.push(data.applied);
        setUser({
          ...user,
          applications
        })
      }
    })
  }

  return (
    <div className="App">
      <LoginContext.Provider value={{user, login, logout, signup, apply}}>
        <Router />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
