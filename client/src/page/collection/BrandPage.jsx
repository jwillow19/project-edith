import React from 'react';
import { Route } from 'react-router-dom';
import BrandCollection from './BrandCollection';
import BrandProductItem from '../product/BrandProductItem';

// <Route path={`${match.path}/:productId`} component={BrandProductItem} />
const BrandPage = ({ match, location }) => {
  // console.log('BrandCollectionPage fired');
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={BrandCollection} />
      <Route
        path={`${match.path}/brand/:productId`}
        component={BrandProductItem}
      />
    </div>
  );
};

export default BrandPage;
