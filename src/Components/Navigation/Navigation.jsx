import React from 'react';

import { Menu } from 'semantic-ui-react';
import NavIcon from './NavIcon';

const Navigation = () => {
  return (
    <Menu fixed="bottom" widths="5" id="navigation">
      <NavIcon size="large" name="gamepad" to="/leaderboard" />
      <NavIcon size="large" name="star" to="/leaderboard" />
      <NavIcon size="big" name="home" exact to="/" />
      <NavIcon size="large" name="users" to="/social" />
      <NavIcon size="large" name="camera" to="/challenge" />
    </Menu>
  );
};

export default Navigation;
