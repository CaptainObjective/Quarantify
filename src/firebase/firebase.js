import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

auth.signInWithEmailAndPassword('marcin@marcin.com', '123456');
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// auth.signInWithEmailAndPassword('adam@adam.com', 'adamadam')

export default {
  auth,
  firestore
};
