import React from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from '../../components/collections/OverviewPage';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/actions/shop';

import CollectionPageContainer from '../../page/collection/CollectionPage.container';

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    // LiveUpdate fetch data method - get snapshot of collection when first run or upon chagnes
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log(collectionsMap);
    //   // action to update collections from store
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // <Route exact path={`${match.path}`} component={OverviewPage} />
    // });
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={OverviewPage} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
