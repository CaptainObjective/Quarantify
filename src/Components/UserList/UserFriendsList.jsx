import React, {useEffect, useState} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from 'firebase';
import UserCard from "../UserCard";
import {useAuthorization} from "../../hooks/useAuthorization";
import {styles} from './styles'
import {Button} from 'semantic-ui-react'

const UserFriendsList = () => {
  const currentUser = useAuthorization()
  // const [value, loading, error] = useCollectionData(firestore().collection('Users'));
  const value = [currentUser]


  const sortedValue = value && value.sort((a, b) => b.score - a.score)
  const currentUserPosition = sortedValue && currentUser && sortedValue.map(user => user.userId).indexOf(currentUser.userId) + 1

    // if (loading) return <p>Loading..</p>;
    // if (error) return <p>error..</p>;

    return (
    <div style={styles.list}>
      <div style={styles.innerList}>
        {sortedValue.map((user, i) => {
          return <UserCard {...user} key={i} place={i + 1}/>;
        })}
      </div>
      <UserCard {...currentUser} place={currentUserPosition}/>
    </div>
  );
};

export default UserFriendsList;
