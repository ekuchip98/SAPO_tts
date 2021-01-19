import React, { useState, useEffect, useContext } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { authContext } from './Utils/AuthContext';
import axios from 'axios';

function App() {

  const { auth } = useContext(authContext);
  const { token } = auth;
  useEffect(() => {

    if (!token) return;

    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }

    axios.post('/api/random', config)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      })
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PublicRoute path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;