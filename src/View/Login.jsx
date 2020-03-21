import React from 'react';
import { Redirect } from 'react-router-dom';
import {useAuthorization} from "../hooks/useAuthorization";

const Login = () => {
  const user = useAuthorization()
  if (user) return <Redirect to="/" />;
  return <div>Login</div>;
};

export default Login;
