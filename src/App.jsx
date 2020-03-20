import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './View/Home';
import Login from './View/Login';
import Challenge from './View/Challenge';
import Social from './View/Social';
import LeaderBoard from './View/LeaderBoard';

import PrivateRoute from './Components/PrivateRoute';
import Navigation from './Components/Navigation/Navigation';
import { styles } from './global.styles';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Navigation style={styles.main}>
          <PrivateRoute path="/challenge" component={Challenge} />
          <PrivateRoute path="/social" component={Social} />
          <PrivateRoute path="/leaderboard" component={LeaderBoard} />
          <PrivateRoute path="/" exact component={Home} />
        </Navigation>
      </Switch>
    </Router>
  );
};

export default App;
