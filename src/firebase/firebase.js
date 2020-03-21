import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export default {
  auth,
  firestore
};
