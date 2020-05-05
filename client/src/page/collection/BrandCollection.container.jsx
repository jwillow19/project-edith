import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BrandCollection from './BrandCollection';
import WithSpinner from '../../components/spinner/WithSpinner';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const BrandCollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(BrandCollection);

export default BrandCollectionContainer;
