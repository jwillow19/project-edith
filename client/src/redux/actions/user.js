import {
  GOOGLE_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/types';

// // @action  takes in a user object from authStateChanged and return action object
// export const setUser = (user) => ({
//   type: SET_USER,
//   payload: user,
// });

// @action  trigger signin start action
export const googleSignInStart = () => ({
  type: GOOGLE_SIGNIN_START,
});

// @action(user)  returns user on successful signin
export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

// @action(error)  returns error on failed signin
export const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

// @action(emailAndPasswor object)  trigger signin start action
export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

// @action  checks user session, see if they are signed in or out
export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

// @action  sign user out
export const signOutStart = () => ({
  type: SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: SIGNOUT_FAILURE,
  payload: error,
});

// @action(ARG: email, password, name obj)    user signup
export const signUpStart = (emailNameAndPassword) => ({
  type: SIGNUP_START,
  payload: emailNameAndPassword,
});
export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});
export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// // @action  registers user
// export const register = (name, email, password) => async (dispatch) => {
//   try {
//     // create user document => trigger authStateChange in App.js => triggers createUserProfile()
//     const { user } = await auth.createUserWithEmailAndPassword(email, password);
//     // calling createUserProfile here to store the display name
//     const userRef = await createUserProfile(user, { displayName: name });
//     // userRef.onSnapshot((snapshot) => {
//     //   dispatch({
//     //     type: REGISTER_SUCCESS,
//     //     // payload is the user object
//     //     payload: { id: snapshot.id, ...snapshot.data() },
//     //   });
//     // });
//     dispatch({
//       type: REGISTER_SUCCESS,
//     });
//   } catch (err) {
//     console.error(err);
//     dispatch({
//       type: REGISTER_FAIL,
//     });
//   }
// };

// // @action  log user in with email and password
// export const loginWithEmailAndPassword = (email, password) => async (
//   dispatch
// ) => {
//   try {
//     // firebase.auth method to sign in, search unique email identifier and verify password
//     await auth.signInWithEmailAndPassword(email, password);
//     dispatch({
//       type: LOGIN_SUCCESS,
//     });
//   } catch (err) {
//     console.error(err);
//     dispatch({
//       type: LOGIN_FAIL,
//     });
//   }
// };
