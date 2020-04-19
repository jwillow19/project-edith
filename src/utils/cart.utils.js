import cart from '../redux/reducers/cart';

export const addItemToCart = (cartItems, itemToAdd) => {
  // check if item is in cart - .find() returns item that validation condition to true
  const itemExist = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  // itemExist = null if itemToAdd not in cartItems
  // map each unique, individual item and increase quantity if same item - no duplicates
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
