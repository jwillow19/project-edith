import {
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGNOUT_START,
} from '../actions/types';
import {
  googleProvider,
  auth,
  createUserProfile,
  getCurrentUser,
} from '../../firebase/db';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from '../actions/user';
import { takeLatest, put, all, call } from 'redux-saga/effects';

export function* getUserSnapshot(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth); //get userRef - similar to async/await with yield
    const userSnapshot = yield userRef.get(); //get userSnapshot from QueryReference object
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })); // sign in with snapshot.data()
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// @saga    sign in with Google, if account DNE, create profile
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider); //get userAuth object from popup
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// @saga    sign in with email and password, if account DNE, create profile
export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password); //get userAuth object from popup
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

//@saga     Persist user profile - checks if user is signed in or not - if they are, get snapshot of their profile
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return; // if userAuth == null(not signed in) - do nothing
    // user is signed in - get user snapshot
    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// @saga    sign user out
export function* signUserOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// ======================================================
// Listeners

// @saga    listens for latest action that triggers action_type: GOOGLE_SIGNIN_START; calls generator function to handle google signin
export function* googleSignInStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle);
}
// @saga    listens for latest action that triggers action_type: EMAIL_SIGNIN_START; calls generator function to handle email & pw signin
export function* emailSignInStart() {
  yield takeLatest(EMAIL_SIGNIN_START, signInWithEmailAndPassword);
}

// @saga    listens for check_user_session action_type
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

// @saga    listens for SIGNOUT_STARt action_type
export function* onSignOutStart() {
  yield takeLatest(SIGNOUT_START, signUserOut);
}

// ======================================================
// userSagas

// @saga    takes in all SAGA LISTENERS and pass to root-saga
export function* userSagas() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
  ]);
}
