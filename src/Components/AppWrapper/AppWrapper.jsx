import React from 'react';
import { Container } from 'semantic-ui-react';
import AppBar from '../AppBar/AppBar';
import Navigation from '../Navigation';
import { styles } from './styles';

const AppWrapper = ({ children, style }) => {
  return (
    <div style={styles.root}>
      <AppBar />
      <Container style={styles.main}>{children}</Container>
      <Navigation />
    </div>
  );
};

export default AppWrapper;
