import React from 'react';
import { Route } from 'react-router-dom';
import Productitem from '../../page/product/ProductItem';
import CollectionsOverview from './CollectionsOverview';

const OverviewPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:productId`} component={Productitem} />
    </div>
  );
};

export default OverviewPage;
