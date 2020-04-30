import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../actions/types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from '../actions/shop';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/db';

export function* fetchCollectionsAsync() {
  yield console.log('something');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // @saga-method:  call(functon, params for function) - calls the function with given parameter
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // @saga-method:  put(ACTION) basically dispatch
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  //  Promise styled fetch:
  // try {
  //   collectionRef.get().then((snapshot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   });
  // } catch (err) {
  //   dispatch(fetchCollectionsFailure(err.message));
  // }
}

// @saga  listens for every instance of action-type: FETCH_COLLECTIONS_START and invoke async fetch generator
export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
