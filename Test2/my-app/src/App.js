import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;