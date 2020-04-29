// import SHOP_DATA from '../../page/shop/shop.data';
import { UPDATE_COLLECTIONS } from '../actions/types';
const initialState = {
  collections: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // returns state with collections
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
}
