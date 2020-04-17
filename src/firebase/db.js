// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace. (individual services get attached to 'firebase')
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6Fy7kVGNScj8L5FLoZXO8385Oghx139s',
  authDomain: 'project-edith-51131.firebaseapp.com',
  databaseURL: 'https://project-edith-51131.firebaseio.com',
  projectId: 'project-edith-51131',
  storageBucket: 'project-edith-51131.appspot.com',
  messagingSenderId: '766093877049',
  appId: '1:766093877049:web:c33af656f32effde9512e8',
  measurementId: 'G-SSJD9HZBV8',
};

firebase.initializeApp(firebaseConfig);

// For auth and using the db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign-In authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// sign in with popup with the provider set to Google only (can be twitter etc...)
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
