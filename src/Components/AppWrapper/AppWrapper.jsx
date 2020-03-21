import React from 'react';
import { Container } from 'semantic-ui-react';
import AppBar from '../AppBar/AppBar';
import Navigation from '../Navigation';

const AppWrapper = ({ children, style }) => {
  return (
    <div style={style}>
      <AppBar />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>{children}</Container>
      <Navigation />
    </div>
  );
};

export default AppWrapper;
