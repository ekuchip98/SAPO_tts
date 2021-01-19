import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const { auth } = useContext(authContext);
  return (
    <Route
      {...rest}
      render={(props) => auth.token ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
};
export default PrivateRoute;