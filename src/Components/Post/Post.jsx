import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import profilePlaceholder from '../../assets/images/Profile picture.png';
import { styles } from './styles';

const Post = ({ text, image, author }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header style={styles.header}>
          <Image floated="left" avatar size="large" src={author.avatar} />
          {author.username}
          <span style={styles.scoreSection}>
            <Icon name="star" color={'yellow'} />
            {author.score}
          </span>
        </Card.Header>
        <Card.Description>{text}</Card.Description>
      </Card.Content>
      {image && <Image src={profilePlaceholder} wrapped />}
    </Card>
  );
};

Post.defaultProps = {
  text: 'Placeholder text',
  image: null,
  author: {
    username: 'Unknown',
    score: '000',
    avatar: profilePlaceholder
  }
};

export default Post;
