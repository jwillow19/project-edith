import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop.sagas';
import { userSagas } from './user.saga';
// @rootSaga - put all sagas to listen for inside rootSaga
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
