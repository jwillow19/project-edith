import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BrandPage from './BrandPage';
import WithSpinner from '../../components/spinner/WithSpinner';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const BrandPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(BrandPage);

export default BrandPageContainer;
