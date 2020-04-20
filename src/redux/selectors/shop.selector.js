import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// Select the list of collection objects from shop state
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// get keys from collections object - ['hats', 'jackets', 'sneakers', ...] and map collections based on
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
// Select the collection which matches the id in COLLECTION_ID_MAP
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  );
