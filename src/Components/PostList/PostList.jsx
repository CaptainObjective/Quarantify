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
      {value.map((post, i) => {
        return <Post {...post} key={i} />;
      })}
    </Container>
  );
};

export default PostList;
