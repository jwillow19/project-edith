import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections/CollectionsOverview';
import OverviewPage from '../../components/collections/OverviewPage';
import CollectionPage from '../collection/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/db';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/actions/shop';
import WithSpinner from '../../components/spinner/WithSpinner';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    // after mount: pull collection data
    const collectionRef = firestore.collection('collections');

    //  Promise styled fetch:
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // LiveUpdate fetch data method - get snapshot of collection when first run or upon chagnes
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log(collectionsMap);
    //   // action to update collections from store
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route exact path={`${match.path}`} component={OverviewPage} />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollections })(Shop);
