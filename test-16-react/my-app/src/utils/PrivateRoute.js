import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../utils/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {

    const { auth } = useContext(authContext);
    return (
        <Route
            {...rest}
            render={(routeProps) => (
                auth.token ? <Component {...routeProps} /> : <Redirect to="/login" />
            )}
        />

    );
}

export default PrivateRoute;

