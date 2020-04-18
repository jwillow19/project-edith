import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERR,
  LOGOUT,
  SET_USER,
} from '../actions/types';
import { auth } from '../../firebase/db';
import { createUserProfile } from '../../firebase/db';

// @action  takes in a user object from authStateChanged and return action object
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

// @action  log user in with email and password
export const loginWithEmailAndPassword = (email, password) => async (
  dispatch
) => {
  try {
    // firebase.auth method to sign in, search unique email identifier and verify password
    await auth.signInWithEmailAndPassword(email, password);
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// @action  registers user
export const register = (name, email, password) => async (dispatch) => {
  try {
    // create user document => trigger authStateChange in App.js => triggers createUserProfile()
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    // calling createUserProfile here to store the display name
    const userRef = await createUserProfile(user, { displayName: name });
    // userRef.onSnapshot((snapshot) => {
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //     // payload is the user object
    //     payload: { id: snapshot.id, ...snapshot.data() },
    //   });
    // });
    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
