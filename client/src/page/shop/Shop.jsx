import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from '../../components/collections/OverviewPage';
// import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/shop';

import BrandPageContainer from '../../page/collection/BrandPage.container';
import CollectionPageContainer from '../../page/collection/CollectionPage.container';

// TRYING to aggregate all routes in shop

import BrandCollectionContainer from '../../page/collection/BrandCollection.container';
import BrandProductItem from '../product/BrandProductItem';

import GenderCollectionContainer from '../../page/collection/GenderCollection.container';
import ProductItem from '../product/ProductItem';

const Shop = ({ match, location, fetchCollectionsStart }) => {
  // console.log('Shop page pickup');
  // console.log(match);
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={OverviewPage} />
      <Route
        path={`${match.path}/:collectionId`}
        component={BrandPageContainer}
      />

      <Route
        path={`${match.path}/:collectionId/:genderId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
