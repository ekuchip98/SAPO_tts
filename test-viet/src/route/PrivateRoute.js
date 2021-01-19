import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function PrivateRoute({ path: path, component: Component, ...rest }) {
    const { authentication } = useAuth();
    
    return (
        <Route
            {...rest}
            render={props => (
                authentication.token ?
                    <Component {...props} />
                    :
                    <Redirect             
                        to={{ pathname: "/login", state: { prevLocation: path } }} />
            )
            }
        />
    );
}

export default PrivateRoute;