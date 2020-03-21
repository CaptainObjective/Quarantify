import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './View/Home/Home';
import Login from './View/Login';
import Challenge from './View/Challenge';
import Social from './View/Social';
import LeaderBoard from './View/LeaderBoard';
import StartingPage from "./View/StartingPage/StartingPage";

import PrivateRoute from './Components/PrivateRoute';
import AppWrapper from './Components/AppWrapper';
// import Navigation from './Components/Navigation';
import { styles } from './global.styles';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
          <PrivateRoute path="/start" component={StartingPage} />
          <AppWrapper style={styles.main}>
          <PrivateRoute path="/challenge" component={Challenge} />
          <PrivateRoute path="/social" component={Social} />
          <PrivateRoute path="/leaderboard" component={LeaderBoard} />
          <PrivateRoute path="/" exact component={Home} />
        </AppWrapper>
      </Switch>
    </Router>
  );
};

export default App;
