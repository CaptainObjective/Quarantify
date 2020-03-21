import React from 'react';
import Post from '../Post';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from 'firebase';

const PostList = () => {
  const [value, loading, error] = useCollectionData(firestore().collection('Posts'));
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error..</p>;
  console.log(value);
  return (
    <>
      {value.map((post, i) => {
        return <Post {...post} key={i} />;
      })}
    </>
  );
};

export default PostList;
