import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';


function useProtect(user) {

  const navigate = useNavigate(); 

  useEffect(function(){
    if (!user?.username) {
      console.log(user);
      navigate('/');
    }
  }, [])
}

export default useProtect;