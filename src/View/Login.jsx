import React from 'react';
import { isAuthenticated } from '../Utils';
import { Redirect } from 'react-router-dom';

const Login = () => {
  if (isAuthenticated) return <Redirect to="/" />;
  return <div>Login</div>;
};

export default Login;
