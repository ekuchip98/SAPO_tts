import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './AuthContext';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) => !auth.token ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
}

export default PublicRoute;