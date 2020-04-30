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

// NOTE - Create user profiles to DB - userAuth obj from auth.authStateChanged
export const createUserProfile = async (userAuth, additionData) => {
  // logout returns null - if(logout) do nothing
  if (!userAuth) return;

  // reference to QueryDocument object location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get QuerySnapshot object of document
  const snapshot = userRef.get();
  // If snapshot of user DNE - create instance
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // create Document object
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

// Get snapshot to object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollecion = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollecion.reduce((accumulator, collection) => {
    // console.log(accumulator);
    // setting title as key to each collection obj - where transformedCollection is a list of collection objs
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Create new collection to store items with batch
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };

// checks if user is authenticated
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// For auth and using the db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign-In authentication utility
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// sign in with popup with the provider set to Google only (can be twitter etc...)
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
