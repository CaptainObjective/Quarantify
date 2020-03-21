import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// auth.signInWithEmailAndPassword('marcin@marcin.com', '123456');
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default {
  auth,
  firestore
};
