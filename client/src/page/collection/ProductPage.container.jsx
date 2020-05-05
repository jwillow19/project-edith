import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProductPage from './ProductPage';
import WithSpinner from '../../components/spinner/WithSpinner';
import { compose } from 'redux';
import { selectIsCollectionLoaded } from '../../redux/selectors/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const ProductPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductPage);

export default ProductPageContainer;
