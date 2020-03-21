import React from 'react';
import {useAuthorization} from "../hooks/useAuthorization";

const Home = () => {
  useAuthorization()

  return <div>Home id</div>;
};

export default Home;
