import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from '../../components/collections/OverviewPage';
// import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/shop';

import ProductItem from '../product/ProductItem';
import BrandProductItem from '../../page/product/ProductItem';
import BrandCollectionContainer from '../collection/BrandCollection.container';
import CollectionPageContainer from '../../page/collection/CollectionPage.container';

const Shop = ({ match, location, fetchCollectionsStart }) => {
  console.log('Shop page pickup');
  console.log(match);
  console.log(location);
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={OverviewPage} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={BrandCollectionContainer}
      />

      <Route
        exact
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
