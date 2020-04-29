import { UPDATE_COLLECTIONS } from './types';

export const updateCollections = (collectionsMap) => (dispatch) => {
  dispatch({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap,
  });
};
