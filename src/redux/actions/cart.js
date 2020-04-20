import {
  TOGGLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_BY_ONE,
  INCREASE_BY_ONE,
} from './types';

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

//@action   remove item from cart
export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
};

//@action   decrease item by one
export const decreaseItemCount = (item) => (dispatch) => {
  dispatch({
    type: DECREASE_BY_ONE,
    payload: item,
  });
};

//@action   increase item by one
export const increaseItemCount = (item) => (dispatch) => {
  dispatch({
    type: INCREASE_BY_ONE,
    payload: item,
  });
};
