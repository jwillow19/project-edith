import React from 'react';
import { Route } from 'react-router-dom';
import ProductItem from '../product/ProductItem';
// <Route exact path={`${match.path}`} component={Collection} /> - previous route setting for shop page
// <Route path={`${match.path}/:productId`} component={ProductItem} />

// <Route exact path={`${match.path}/:collectionId`} component={BrandCollection} />
const GenderCollectionPage = ({ match, location }) => {
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={ProductItem} />
    </div>
  );
};

export default GenderCollectionPage;
