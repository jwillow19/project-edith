import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections/CollectionsOverview';
import Collection from '../collection/Collection';
import ProductItem from '../../page/product/ProductItem';

const Shop = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
      <Route
        path={`${match.path}/:collectionId/:productId`}
        component={ProductItem}
      />
    </div>
  );
};

export default Shop;
