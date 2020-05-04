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
