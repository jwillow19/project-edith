import { createSelector } from 'reselect';

// NOTE- this is an 'input selector' (selectors that return a piece of the state)
const selectCart = (state) => state.cart;

// NOTE- these are transforms of input-selectors, selectors that select a part of the state
// createSelctor( INPUT_SELECTOR, COLLECTION)
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
);

export const selectCartItemsPrice = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((accum, cartItem) => accum + cartItem.price, 0)
);
