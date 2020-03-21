import React from 'react';
import { Container, Loader, Dimmer } from 'semantic-ui-react';

import useNestedData from '../../hooks/useNestedData';
import Post from '../Post';
import AddPost from '../AddPost/';
import MyLoader from '../MyLoader/MyLoader';

const PostList = () => {
  const [value, loading, error] = useNestedData(['Posts', 'author']);
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
            .sort((a, b) => b.timestamp.seconds - a.timestamp.seconds)
            .map((post, i) => {
              return <Post {...post} key={i} />;
            })}
        </div>
      </Container>
      <AddPost />
    </>
  );
};

export default PostList;
