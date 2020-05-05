import React from 'react';
import { Route } from 'react-router-dom';
import GenderCollection from './GenderCollection';
import ProductItem from '../product/ProductItem';
// <Route exact path={`${match.path}`} component={Collection} /> - previous route setting for shop page
// <Route path={`${match.path}/:productId`} component={ProductItem} />

// <Route exact path={`${match.path}/:collectionId`} component={BrandCollection} />
// <Route path={`${match.path}/:productId`} component={ProductItem} />
const CollectionPage = ({ match, location }) => {
  console.log('collectionPage fired');
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={GenderCollection} />
      <Route path={`${match.path}/:productId`} component={ProductItem} />
    </div>
  );
};

export default CollectionPage;
