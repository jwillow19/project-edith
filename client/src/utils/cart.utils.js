// @note    util functions checks for the FullModelCode to see if product is in cart
export const addItemToCart = (cartItems, itemToAdd) => {
  // check if item is in cart - .find() returns item that validation condition to true
  const itemExist = cartItems.find(
    (cartItem) =>
      cartItem.linkUrl.split('/')[1] === itemToAdd.linkUrl.split('/')[1]
  );
  // itemExist = null if itemToAdd not in cartItems
  // map each unique, individual item and increase quantity if same item - no duplicates
  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.linkUrl.split('/')[1] === itemToAdd.linkUrl.split('/')[1]
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

//  @note   removes cartItem instance from cartItems array completely
export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItem = cartItems.filter(
    (cartItem) =>
      cartItem.linkUrl.split('/')[1] !== itemToRemove.linkUrl.split('/')[1]
  );
  return newCartItem;
};

// @note    Using .map() with ternary to loop through array - then modify item quantity
export const decreaseItemCountByOne = (cartItems, itemToDecrease) => {
  const itemToModify = cartItems.find(
    (cartItem) =>
      cartItem.linkUrl.split('/')[1] === itemToDecrease.linkUrl.split('/')[1]
  );
  // case: if quantity is 1, remove instance completely from cart
  if (itemToModify.quantity === 1) {
    return removeItemFromCart(cartItems, itemToModify);
  }
  // case: if quantity is >1, map through array, find the matching item, modify the quantity of that item and return the item state
  return cartItems.map((cartItem) =>
    cartItem.linkUrl.split('/')[1] === itemToDecrease.linkUrl.split('/')[1]
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { ...cartItem }
  );
};

//@note   incrase item quantity by one
export const IncreaseItemCountByOne = (cartItems, itemToIncrease) => {
  // [NOTE] - map through array, find the matching item, modify the quantity of that item and return the item state
  return cartItems.map((cartItem) =>
    cartItem.linkUrl.split('/')[1] === itemToIncrease.linkUrl.split('/')[1]
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : { ...cartItem }
  );
};
