import React from 'react';
import { Route } from 'react-router-dom';
import GenderCollection from './GenderCollection';

const CollectionPage = ({ match }) => {
  // console.log('collectionPage fired');
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={GenderCollection} />
    </div>
  );
};

export default CollectionPage;
