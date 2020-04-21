import SHOP_DATA from '../../page/shop/shop.data';

const initialState = {
  collections: SHOP_DATA,
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
