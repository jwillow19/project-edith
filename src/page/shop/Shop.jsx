import React from 'react';
import { Route } from 'react-router-dom';
import OverviewPage from '../../components/collections/OverviewPage';
import CollectionPage from '../collection/CollectionPage';
import { connect } from 'react-redux';
import WithSpinner from '../../components/spinner/WithSpinner';
import { fetchCollectionsStartAsync } from '../../redux/actions/shop';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/selectors/shop.selector';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const OverviewPageWithSpinner = WithSpinner(OverviewPage);
class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
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
    const { match, fetchingCollection, collectionLoaded } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={OverviewPage} />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!collectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetchingCollection: selectIsCollectionFetching,
  collectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
