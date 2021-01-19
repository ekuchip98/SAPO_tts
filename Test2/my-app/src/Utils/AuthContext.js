import React, { createContext, useState, useEffect } from 'react';

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, token: null });
  // we will use loading later


  const setAuthData = (token) => {
    setAuth({ token: token });
  };
  // a function that will help us to add the user data in the auth;

  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem('token'))
    });
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