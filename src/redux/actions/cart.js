import { TOGGLE_CART } from './types';

// @action - button onClick triggers action
export const toggleCart = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART,
  });
};
