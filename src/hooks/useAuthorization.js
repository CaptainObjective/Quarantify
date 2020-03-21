import { useEffect, useState } from 'react';
import firebase from "firebase/app";
import {useHistory} from 'react-router-dom'

export const useAuthorization = () => {
    const [user, setUser] = useState(null);
    const history = useHistory()

    useEffect(() => {
        const checkAuthorization = async (currentUser) => {
            setUser(currentUser);
            if (!currentUser) {
                history.push('/login')
            }

            const snapshot = await firebase.firestore().collection('Users').where('userId', '==', currentUser.uid).get()
            if (snapshot.empty) return
            const userData = snapshot.docs[0].data()

            setUser(userData);

            if (!userData.localization) {
                history.push('/start')
            }

        };

        firebase.auth().onAuthStateChanged(authUser => {
            checkAuthorization(authUser);
        });
    }, []);

    return user;
};
