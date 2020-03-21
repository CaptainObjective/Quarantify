import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

// import sampleProfile from '../../assets/images/Profile picture.png';
import { styles } from './styles';
import {useAuthorization} from "../../hooks/useAuthorization";

const UserCard = ({ score, username, avatar, place }) => {
  const user = useAuthorization()

  return (
    <Card style={{
      width: '100%'
    }}>
      <Card.Content>
        <Card.Header style={styles.header}>
          {place}
          <Image style={styles.image} avatar size="large" src={avatar} />
          {username}
          <span style={styles.scoreSection}>
            <Icon name="star" color={'yellow'} />
            {score}
          </span>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

UserCard.defaultProps = {
  username: 'Steve Sanders',
  text: 'Placeholder text',
  score: 666
};

export default UserCard;
