
import { Form, Button } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import { authContext } from '../Utils/AuthContext';
import axios from 'axios';

const Login = ({ history }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setAuthData } = useContext(authContext);

  async function callApiLogin() {
    try {
      const data = {
        username, password
      };
      await axios
        .post('/api/login', data)
        .then(res => {
          setAuthData(res.data.accessToken);
        })
        .then(result => {
          history.push('/dashboard');
        })
        .catch(err => {
          console.log(err)
        });
    } catch (error) {
      localStorage.clear();
    }
  }

  const onFormSubmit = e => {
    e.preventDefault();
    callApiLogin();
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center">Sign in</h1>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            className="w-100 mt-3"
            onClick={onFormSubmit}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;