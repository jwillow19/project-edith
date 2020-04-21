import React from 'react';
import './product-item.styles.scss';
import { connect } from 'react-redux';
import {
  selectProduct,
  selectCollection,
} from '../../redux/selectors/shop.selector';

const ProductItem = ({ match, collection, item }) => {
  console.log(collection);
  console.log(item);
  return (
    <div className='product-container'>
      <div className='description-column'>DESCRIPTION</div>
      <div className='product-images'>SCROLLABLE IMG CONTENT</div>
      <div className='add-to-column'>PRICE, Add to bag</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  item: selectProduct(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),
  //   item: selectorProduct(ownProps.match.params.productId)(
  //     ownProps.match.params.collectionId
  //   )(state),
});
export default connect(mapStateToProps)(ProductItem);
// export default ProductItem;
