import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

import placholderAvatar from '../../assets/images/placholderAvatar.png';

const PendingChallenge = ({ id, startedOn, author, handleChallengeAccept }) => {
  var today = startedOn.toDate();
  var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
  var time = today.getHours() + ':' + (today.getMinutes() + 15);
  var dateTime = time + ' ' + date;
  return (
    <>
      <Card>
        <Card.Content>
          <Image floated="left" avatar size="large" src={author?.avatar} />
          <Card.Header>{author.username}</Card.Header>
          <Card.Meta>Expires on : {dateTime}</Card.Meta>
          <Card.Description>{author.username} requested from you selfie proof that you are at home!</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="red">Decline</Button>
            <Button color="green" onClick={() => handleChallengeAccept(id)}>
              Take selfie!
            </Button>
          </div>
        </Card.Content>
      </Card>
    </>
  );
};

PendingChallenge.defaultProps = {
  timestamp: Date.now(),
  id: '000',
  author: {
    username: 'Unknown',
    score: '000',
    avatar: placholderAvatar
  }
};

export default PendingChallenge;
