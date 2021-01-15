import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { authContext } from './AuthContext';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        const onFormSubmit = e => {
            e.preventDefault();
            console.log(this.state.email);
            console.log(this.state.password);
            this.context.setAuthData(this.state.email);
            this.props.history.replace('/');
        };
        return (
            <div
                style={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center"
            >
                <div style={{ width: 300 }}>
                    <h1 className="text-center">Sign in</h1>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                onChange={e => {
                                    this.setState({ email: e.target.value });
                                }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={e => {
                                    this.setState({ password: e.target.value });
                                }}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 mt-3"
                        >
                            Sign in
                      </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
SignIn.contextType = authContext;
export default SignIn;