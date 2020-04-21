import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// Select the list of collection objects from shop state
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// [NOTE]
// 1. get keys from collections object - ['hats', 'jackets', 'sneakers', ...]
// 2. map each key to return a collection object
// 3. returns a list of collection objects for CollectionOverview to pass to CollectionPreview
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// Select the collection which has matching key value as the url-param
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  );

// Select a product in a collection with matching key value as url-param
