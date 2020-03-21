import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';

export const useAuthorization = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
const {pathname} = useLocation()

  // console.log({location})
  useEffect(() => {
    const checkAuthorization = async currentUser => {
      // setUser(currentUser);
      if (pathname.includes('register')) {
        return
      }

      if (!currentUser) {
        history.push('/login');
        return;
      }
      const snapshot = await firebase
        .firestore()
        .collection('Users')
        .where('userId', '==', currentUser.uid)
        .get();

      console.log({snapshot})
      if (snapshot.empty) return;
      const userData = snapshot.docs[0].data();

      setUser({
        id: snapshot.docs[0].id,
        ...userData
      });

      if (!userData.localization) {
        history.push('/start');
      }
    };

    firebase.auth().onAuthStateChanged(authUser => {
      checkAuthorization(authUser);
    });
  }, []);

  return user;
};
