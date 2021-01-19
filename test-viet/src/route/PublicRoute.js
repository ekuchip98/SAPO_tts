import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function PublicRoute({ path: path, component: Component, ...rest }) {
    const { authentication } = useAuth();
    let prevLocation = rest.location.state ? rest.location.state.prevLocation : '/';
 
    return (
        <Route
            {...rest}
            render={props => (
                authentication.token ?
                    <Redirect
                        to={{ pathname: prevLocation }} />
                    :
                    <Component {...props} />

            )
            }
        />
    );
}

export default PublicRoute;