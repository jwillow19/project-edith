import { TOGGLE_CART } from '../actions/types';

const initialState = {
  hidden: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
}
