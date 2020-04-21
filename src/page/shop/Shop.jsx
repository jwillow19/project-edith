import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections/CollectionsOverview';
import Collection from '../collection/Collection';
import ProductItem from '../../page/product/ProductItem';
import CollectionPage from '../collection/CollectionPage';

const Shop = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />

      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
