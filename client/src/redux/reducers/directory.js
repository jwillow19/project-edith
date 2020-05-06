import {
  TOGGLE_DROPDOWN,
  TOGGLE_EYEWEAR,
  TOGGLE_SUNWEAR,
  TOGGLE_CONTACTS,
  CLOSE_DROPDOWN,
} from '../actions/types';

const initialState = {
  dropdownMenu: false,
  isEyewear: false,
  isSunwear: false,
  isContact: false,

  sections: [
    {
      title: 'womens',
      imageUrl: '/images/womens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: '/images/mens.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
    {
      title: 'sunglasses',
      imageUrl: '/images/sunglasses.jpg',
      id: 1,
      linkUrl: 'shop/sunglasses',
    },
    {
      title: 'glasses',
      imageUrl: '/images/glasses.jpg',
      id: 2,
      linkUrl: 'shop/glasses',
    },
    {
      title: 'contact-lenses',
      imageUrl: '/images/contact-lenses.jpg',
      id: 3,
      linkUrl: 'shop/contact%20lenses',
    },
  ],
};
// [NOTE] - moving state to redux, doesn't need action because no other component calls this
export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdownMenu: !state.dropdownMenu,
      };
    case TOGGLE_EYEWEAR:
      return {
        ...state,
        isEyewear: !state.isEyewear,
        isSunwear: false,
        isContact: false,
      };
    case TOGGLE_SUNWEAR:
      return {
        ...state,
        isSunwear: !state.isSunwear,
        isEyewear: false,
        isContact: false,
      };
    case TOGGLE_CONTACTS:
      return {
        ...state,
        isSunwear: false,
        isEyewear: false,
        isContact: !state.isContact,
      };
    case CLOSE_DROPDOWN:
      return {
        ...state,
        isSunwear: false,
        isEyewear: false,
        isContacts: false,
      };
    default:
      return state;
  }
}
