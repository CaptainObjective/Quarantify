import React from 'react';
import { Container } from 'semantic-ui-react';
import AppBar from '../AppBar/AppBar';

const AppWrapper = ({ children, style }) => {
  return (
    <div style={style}>
      <AppBar />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>{children}</Container>
    </div>
  );
};

export default AppWrapper;
