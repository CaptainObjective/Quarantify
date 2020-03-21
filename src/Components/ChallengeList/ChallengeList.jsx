import React from 'react';
import PendingChallenge from '../PendingChallenge/PendingChallenge';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import useNestedData from '../../hooks/useNestedData';
import { useAuthorization } from '../../hooks/useAuthorization';
import MyLoader from '../MyLoader/MyLoader';

export const ChallengeList = ({ handleChallengeAccept }) => {
  const user = useAuthorization();
  const [value, loading, error] = useNestedData(
    ['Challenges', 'author'],
    [
      ['markedForReview', '==', false],
      ['recipientID', '==', user?.email || ' ']
    ]
  );
  if (loading) return <MyLoader />;
  if (error) return <p>error..</p>;

  return (
    <>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column'
          }}
        >
          {value
            .sort((a, b) => b.seconds - a.seconds)
            .map((challenge, i) => {
              return <PendingChallenge {...challenge} handleChallengeAccept={handleChallengeAccept} key={i} />;
            })}
        </div>
      </Container>
    </>
  );
};
