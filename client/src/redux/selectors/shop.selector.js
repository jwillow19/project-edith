import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// Select the list of collection objects from shop state
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// [NOTE]
// 1. get keys from collections object - ['hats', 'jackets', 'sneakers', ...]
// 2. map each key to return a collection object
// 3. returns a list of collection objects for CollectionOverview to pass to CollectionPreview
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// @selector    Select the collection which has matching key value as the url-param
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

// @selector    select brand collection in eyeglasses and sunglasses collection
// 1. grab collections from state
// 2. use Object.entries(Obj) to get list of object entries; dtype LIST[LISTS]
// 3. filter item with matching brand field and push to placeholder variable and return
export const selectBrandCollection = (brandUrlParam) =>
  createSelector([selectShopCollections], (collections) => {
    // const keys = Object.keys(collections)
    let brandList = [];
    const entries = Object.entries(collections);
    for (const [collectionKey, collectionObj] of entries) {
      const filterList = collectionObj.items.filter(
        (item) => item.brand.toLowerCase() === brandUrlParam.toLowerCase()
      );
      brandList.push(...filterList);
    }
    return brandList;
  });

// @selector    selects product from a brand list
// @for         BrandProductItem
export const selectProductFromBrandList = (productUrlParam, brandUrlParam) =>
  createSelector(
    [selectBrandCollection(brandUrlParam)],

    (brandList) => {
      return brandList.find((product) =>
        productUrlParam.includes(product.model)
      );
    }
  );

// @selector    selects products in collection based on gender: male, female, both
export const selectCollectionGender = (collectionUrlParam, genderUrlParam) =>
  createSelector([selectCollection(collectionUrlParam)], (collection) =>
    collection.items.filter(
      (item) => item.gender === genderUrlParam || item.gender === 'both'
    )
  );
// @selector    selects siblings of product
export const selectProductSibling = (productUrlParam, collectionUrlParam) =>
  createSelector([selectCollection(collectionUrlParam)], (collection) =>
    collection.items.find((item) => productUrlParam.includes(item.model))
  );

// COMPOSED SELECTOR - Select a product in a collection with matching key value as url-param
export const selectProduct = (productUrlParam, collectionUrlParam) =>
  createSelector([selectCollection(collectionUrlParam)], (collection) => {
    var finalProduct = null;
    collection.items.forEach((item, ind) => {
      item.color.forEach((frameObj) => {
        const product = frameObj.lens.find(
          (lenses) => lenses.linkUrl.split('/')[1] === productUrlParam
        );

        if (product) {
          finalProduct = product;
        }
      });

      // return item.color.lens[productIndex]
    });
    // console.log(finalProduct);
    return finalProduct;
  });

// @selector    selects the model of the product
export const selectProductModel = (productUrlParam, collectionUrlParam) =>
  createSelector([selectCollection(collectionUrlParam)], (collection) => {
    const productModel = collection.items.find((item, ind) =>
      productUrlParam.includes(item.model)
    );
    // console.log(finalProduct);
    return productModel;
  });

// returns boolean indicating if collection is null
export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  // !! to convert falsy value to boolean - !!null == false
  (shop) => !!shop.collections
);
