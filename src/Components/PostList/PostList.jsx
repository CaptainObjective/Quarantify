import React from 'react';
import Post from '../Post';
import useNestedData from '../../hooks/useNestedData';
import { Container } from 'semantic-ui-react';

const PostList = () => {
  const [value, loading, error] = useNestedData(['Posts', 'author']);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error..</p>;
  console.log(value);
  return (
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
        {value.map((post, i) => {
          return <Post {...post} key={i} />;
        })}
      </div>
    </Container>
  );
};

export default PostList;
