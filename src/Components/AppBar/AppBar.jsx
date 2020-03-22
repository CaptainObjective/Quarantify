import React from 'react';
import { Image, Header, Segment, Icon, Modal } from 'semantic-ui-react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import placholderAvatar from '../../assets/images/placholderAvatar.png';
import { styles } from './styles';
import { useAuthorization } from '../../hooks/useAuthorization';
import MyLoader from '../MyLoader/MyLoader';
import { firestore } from 'firebase';
import ChangeUserPhoto from '../ChangeUserPhoto/ChangeUserPhoto';

const AppBar = () => {
  const user = useAuthorization();
  const [value, loadin, error] = useCollectionData(
    firestore()
      .collection('Users')
      .where('email', '==', user?.email || ' ')
  );
  if (!user || loadin) {
    return <MyLoader />;
  }

  return (
    <div fixed="top" style={styles.root}>
      <div>
        <Header as="h2">
          <Modal
            trigger={
              <Image
                circular
                src={value[0]?.avatar || user?.avatar || placholderAvatar}
                style={{ maxWidth: 60, maxHeight: 60 }}
              />
            }
            content={<ChangeUserPhoto />}
          />
          {user?.username}
        </Header>
      </div>
      <span position="right" style={{ margin: '10px' }}>
        <Segment style={styles.segment}>
          <Header size="small">
            <Icon name="star" color="yellow" size="small" />
            <Header.Content>{value[0]?.score || user?.score || 0}</Header.Content>
          </Header>
        </Segment>
      </span>
    </div>
  );
};

export default AppBar;
