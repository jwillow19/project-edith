import React from 'react';
import { Route } from 'react-router-dom';
import Collection from './Collection';
import ProductItem from '../product/ProductItem';

const CollectionPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={Collection} />
    <Route path={`${match.path}/:productId`} component={ProductItem} />
  </div>
);

export default CollectionPage;
