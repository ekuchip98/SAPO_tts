import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });
  // we will use loading later


  const setAuthData = (token) => {
    setAuth({ token: token });
  };
  // a function that will help us to add the user data in the auth;
  const verifyToken = async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token"),
      }
    }
    await axios.post('/api/random', {}, config)
      .then(res => {
        console.log(res.data.status)
        return res.data.status;
      })
      .catch(err => {
        return err.response.data.status;
      })
  }

  useEffect(() => {
    if (verifyToken === 200) {
      setAuth({
        token: JSON.parse(window.localStorage.getItem('token'))
      });
    } else {
      setAuth({
        token: null
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('token', JSON.stringify(auth.token));
  }, [auth.token]);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;