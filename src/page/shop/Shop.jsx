import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections/CollectionsOverview';
import Collection from '../Collection/Collection';

const Shop = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
