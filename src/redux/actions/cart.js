import { TOGGLE_CART, ADD_TO_CART } from './types';

// @action - button onClick triggers action
export const toggleCart = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CART,
  });
};

//@action   add item to cart
export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
