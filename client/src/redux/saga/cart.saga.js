import { all, call, takeLatest, put } from 'redux-saga/effects';
import { SIGNOUT_SUCCESS } from '../actions/types';
import { clearCart } from '../actions/cart';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// ==========================================
// LISTENER

// @saga    listen on signout success
export function* onSIgnOutSuccess() {
  yield takeLatest(SIGNOUT_SUCCESS, clearCartOnSignOut);
}

// ===========================================
export function* cartSagas() {
  yield all([call(onSIgnOutSuccess)]);
}
