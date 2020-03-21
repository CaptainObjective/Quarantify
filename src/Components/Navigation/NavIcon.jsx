import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const NavIcon = ({ to, exact, ...props }) => {
  const match = useRouteMatch(to);
  return (
    <Menu.Item active={match?.isExact} as={NavLink} to={to} exact>
      <Icon {...props} color={match?.isExact ? 'orange' : 'black'} />
    </Menu.Item>
  );
};

export default NavIcon;
