import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from './AuthContext';

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        const { auth } = this.context;
        const { loading } = auth;
        console.log(loading)
        if (loading) {
            return (
                <Route
                    {...rest}
                    render={() => {
                        return <p>Loading...</p>;
                    }}
                />
            );
        }
        return (
            <Route
                {...rest}
                render={routeProps => {
                    return auth.data ? (
                        <Component {...routeProps} />
                    ) : (
                            <Redirect to="/sign-in" />
                        );
                }}
            />
        );
    }
};
PrivateRoute.contextType = authContext;
export default PrivateRoute;
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { auth } = useContext(authContext);
//     const { loading } = auth;
//     // if (loading) {
//     //     return (
//     //         <Route
//     //             {...rest}
//     //             render={() => {
//     //                 return <p>Loading...</p>;
//     //             }}
//     //         />
//     //     );
//     // }
//     console.log({ ...rest })
//     return (
//         <Route
//             {...rest}
//             render={routeProps => {
//                 return auth.data ? (
//                     <Component {...routeProps} />
//                 ) : (
//                         <Redirect to="/sign-in" />
//                     );
//             }}
//         />
//     );
// };

// export default PrivateRoute;