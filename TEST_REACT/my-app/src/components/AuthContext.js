import React, { createContext, Component } from 'react';

export const authContext = createContext({});
class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {
                loading: true,
                data: null,
            },
        }
    }

    componentDidMount() {
        this.setState({
            auth: {
                loading: false,
                data: JSON.parse(window.localStorage.getItem('authData')),
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.auth.data !== this.state.auth.data) {
            window.localStorage.setItem('authData', JSON.stringify(this.state.auth.data));
        }
    }

    render() {
        const setAuthData = (data) => {
            this.setState({
                auth: {
                    data: data,
                }
            });
        };
        let auth = this.state.auth;
        return (
            <authContext.Provider value={{ auth, setAuthData }}>
                {this.props.children}
            </authContext.Provider>
        );
    }

}
export default AuthProvider;
