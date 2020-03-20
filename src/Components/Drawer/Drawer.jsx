import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const Drawer = () => {
  return (
    <>
      <Menu.Item as={NavLink} exact to="/">
        <Icon name="home" />
        Activity
      </Menu.Item>
      <Menu.Item as={NavLink} to="/challenge">
        <Icon name="camera" />
        Selfie Challenge
      </Menu.Item>
      <Menu.Item as={NavLink} to="/social">
        <Icon name="users" />
        Community
      </Menu.Item>
      <Menu.Item as={NavLink} to="/leaderboard">
        <Icon name="gamepad" />
        Leaderboard
      </Menu.Item>
    </>
  );
};

export default Drawer;
