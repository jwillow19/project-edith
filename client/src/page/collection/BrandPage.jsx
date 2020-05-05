import React from 'react';
import { Route } from 'react-router-dom';
import BrandCollection from './BrandCollection';

const BrandPage = ({ match }) => {
  // console.log('BrandCollectionPage fired');
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={BrandCollection} />
    </div>
  );
};

export default BrandPage;
