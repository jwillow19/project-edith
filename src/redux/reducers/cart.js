import {
  TOGGLE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_BY_ONE,
  INCREASE_BY_ONE,
  CLEAR_CART,
} from '../actions/types';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemCountByOne,
  IncreaseItemCountByOne,
} from '../../utils/cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    case DECREASE_BY_ONE:
      return {
        ...state,
        cartItems: decreaseItemCountByOne(state.cartItems, payload),
      };
    case INCREASE_BY_ONE:
      return {
        ...state,
        cartItems: IncreaseItemCountByOne(state.cartItems, payload),
      };
    default:
      return state;
  }
}
