import {
  UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/db';

// export const updateCollections = (collectionsMap) => (dispatch) => {
//   dispatch({
//     type: UPDATE_COLLECTIONS,
//     payload: collectionsMap,
//   });
// };

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());
  //  Promise styled fetch:
  try {
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    });
  } catch (err) {
    dispatch(fetchCollectionsFailure(err.message));
  }
};
