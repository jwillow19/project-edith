import React from 'react';
import { Route } from 'react-router-dom';
import Collection from './Collection';
import ProductItem from '../product/ProductItem';

// <Route exact path={`${match.path}`} component={Collection} /> - previous route setting for shop page
// <Route path={`${match.path}/:productId`} component={ProductItem} />
const CollectionPage = ({ match, location }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={Collection} />
      <Route path={`${match.path}/:productId`} component={ProductItem} />
    </div>
  );
};

export default CollectionPage;
