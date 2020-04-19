import { TOGGLE_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';
import { addItemToCart } from '../../utils/cart.utils';

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
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
}
