import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop.sagas';
import { userSagas } from './user.saga';
import { cartSagas } from './cart.saga';
// @rootSaga - put all sagas to listen for inside rootSaga
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
