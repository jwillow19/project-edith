import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

//  @selector   selector dropdownMenu
export const selectDropdown = createSelector(
  [selectDirectory],
  (directory) => directory.dropdownMenu
);
export const selectEyewear = createSelector(
  [selectDirectory],
  (directory) => directory.isEyewear
);

export const selectSunwear = createSelector(
  [selectDirectory],
  (directory) => directory.isSunwear
);

export const selectContacts = createSelector(
  [selectDirectory],
  (directory) => directory.isContact
);
