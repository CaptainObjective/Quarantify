import React, { useState } from 'react';
import { Sidebar, Menu, Icon, Segment, Container } from 'semantic-ui-react';

import Drawer from '../Drawer';
import { styles } from './styles';

const Navigation = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Drawer />
      </Sidebar>
      <Sidebar.Pusher style={{ minHeight: '100vh' }}>
        <Menu fixed="top" style={styles.appbar}>
          <Menu.Item onClick={() => setVisible(!visible)}>
            <Icon name="bars" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="cog" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="user" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>{children}</Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Navigation;
