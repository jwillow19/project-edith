import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections/CollectionsOverview';
import OverviewPage from '../../components/collections/OverviewPage';
import CollectionPage from '../collection/CollectionPage';

const Shop = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={OverviewPage} />

      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
