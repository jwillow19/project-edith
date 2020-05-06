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

export const sumQuantity = (cartItems) => {
  let sum = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity;
  }, 0);
  return sum;
};

//removes cartItem instance from cartItems array completely
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItem = cartItems.filter(
    (cartItem) => cartItem.id !== itemToRemove.id
  );
  return newCartItem;
};

//@decrease item quantity by one
export const decreaseItemCountByOne = (cartItems, itemToDecrease) => {
  const itemToModify = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );
  // case: if quantity is 1, remove instance completely from cart
  if (itemToModify.quantity === 1) {
    return removeItemFromCart(cartItems, itemToModify);
  }
  // case: if quantity is >1, map through array, find the matching item, modify the quantity of that item and return the item state
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { ...cartItem }
  );
};

//@incrase item quantity by one
export const IncreaseItemCountByOne = (cartItems, itemToIncrease) => {
  // [NOTE] - map through array, find the matching item, modify the quantity of that item and return the item state
  return cartItems.map((cartItem) =>
    cartItem.id === itemToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );
};
