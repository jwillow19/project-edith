import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GenderCollection from './GenderCollection';
import WithSpinner from '../../components/spinner/WithSpinner';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const GenderCollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(GenderCollection);

export default GenderCollectionContainer;
