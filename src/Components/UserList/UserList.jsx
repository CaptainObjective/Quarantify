import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from 'firebase';
import UserCard from '../UserCard';
import { useAuthorization } from '../../hooks/useAuthorization';
import { styles } from './styles';
import MyLoader from '../MyLoader/MyLoader';

const UserList = () => {
  const currentUser = useAuthorization();
  const [value, loading, error] = useCollectionData(firestore().collection('Users'));
  if (loading || !currentUser) return <MyLoader />;
  if (error) return <p>error..</p>;

  const sortedValue = value && value.sort((a, b) => b.score - a.score);
  const currentUserPosition = sortedValue && sortedValue.map(user => user.userId).indexOf(currentUser.userId) + 1;

  return (
    <div style={styles.list}>
      <div style={styles.innerList}>
        {sortedValue.map((user, i) => {
          return <UserCard {...user} key={i} place={i + 1} />;
        })}
      </div>
      <UserCard {...currentUser} place={currentUserPosition} />
    </div>
  );
};

export default UserList;
