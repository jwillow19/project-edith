import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from '../../components/collections/OverviewPage';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/shop';

import CollectionPageContainer from '../../page/collection/CollectionPage.container';

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={OverviewPage} />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
