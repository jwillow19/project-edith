import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPage from './CollectionPage';
import WithSpinner from '../../components/spinner/WithSpinner';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
