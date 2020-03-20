import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../Utils';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
