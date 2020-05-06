import {
  TOGGLE_DROPDOWN,
  TOGGLE_EYEWEAR,
  TOGGLE_SUNWEAR,
  TOGGLE_CONTACTS,
  CLOSE_DROPDOWN,
} from './types';

// @action      toggles dropdown menu onClick
export const toggleDropdown = () => ({
  type: TOGGLE_DROPDOWN,
});
export const toggleEyewear = () => ({
  type: TOGGLE_EYEWEAR,
});
export const toggleSunwear = () => ({
  type: TOGGLE_SUNWEAR,
});
export const toggleContacts = () => ({
  type: TOGGLE_CONTACTS,
});

export const closeDropdown = () => ({
  type: CLOSE_DROPDOWN,
});
