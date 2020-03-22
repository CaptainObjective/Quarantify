import React, {useState} from 'react';
import UserList from "../Components/UserList";
import UserFriendsList from "../Components/UserList/UserFriendsList";
import {Button} from "semantic-ui-react";

const LeaderBoard = () => {
  const [currentMode, setCurrentMode] = useState('general')

  return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{borderRadius: '5px', marginBottom: '5px', background: '#F7B15C', minHeight: '55px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', color: '#FEFEFE', fontWeight: 600}}>
              <img src="/crown-1.png" style={{position: 'absolute', left: '40%', top: '9%', zIndex: 10000}}/>
              THE BEST OF THE BEST
          </div>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center', marginBottom: '15px'}}>
        <Button onClick={() => setCurrentMode('general')} style={{
            background: currentMode === 'general' ? '#FEFEFE' : '#F7B15C',
            border: '1px solid #F7B15C',
            color: currentMode === 'general' ? '#F7B15C' : '#FEFEFE',
        }}>
          General
        </Button>
        <Button onClick={() => setCurrentMode('friends')} style={{
            background: currentMode === 'general' ? '#F7B15C' : '#FEFEFE',
            border: '1px solid #F7B15C',
            color: currentMode === 'general' ? '#FEFEFE' : '#F7B15C',
            }}>
          Friends
        </Button>
          </div>
        {currentMode === 'general' ? (
      <UserList />
  ): (
      <UserFriendsList />
  )}
    </div>
  )
};

export default LeaderBoard;
