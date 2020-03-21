import React from 'react';
import { Image, Header, Segment, Icon } from 'semantic-ui-react';

import placholderAvatar from '../../assets/images/placholderAvatar.png';
import { styles } from './styles';
import { useAuthorization } from '../../hooks/useAuthorization';

const AppBar = () => {
    const user = useAuthorization()

    if (!user) {
        return <span />
    }

  return (
    <div fixed="top" style={styles.root}>
      <div>
        <Header as="h2">
          <Image circular src={user?.avatar || placholderAvatar} /> {user?.username}
        </Header>
      </div>
      <span position="right" style={{margin: '10px'}}>
        <Segment style={styles.segment}>
          <Header size="small">
            <Icon name="star" color="yellow" size="small" />
            <Header.Content>{user?.score || 0}</Header.Content>
          </Header>
        </Segment>
      </span>
    </div>
  );
};

export default AppBar;
