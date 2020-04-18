import { CLICK_CART } from './types';

// @action - button onClick triggers action
export const handleCartClick = () => (dispatch) => {
  dispatch({
    type: CLICK_CART,
  });
};
