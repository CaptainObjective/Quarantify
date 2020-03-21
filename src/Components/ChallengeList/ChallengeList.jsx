import React from 'react';
import PendingChallenge from '../PendingChallenge/PendingChallenge';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import useNestedData from '../../hooks/useNestedData';

export const ChallengeList = ({ handleChallengeAccept }) => {
  const [value, loading, error] = useNestedData(
    ['Challenges', 'author'],
    [
      ['markedForReview', '==', false],
      ['recipientID', '==', 'f9eYzQ0NZmh0OYwd62hG']
    ]
  );
  if (loading)
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
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
