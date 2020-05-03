import React from 'react';
import './product-item.styles.scss';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import {
  selectProduct,
  selectCollection,
  selectProductSibling,
} from '../../redux/selectors/shop.selector';

const ProductItem = ({
  // match,
  // history,
  item,
  collection,
  addItem,
  // itemSibling,
  ...otherProps
}) => {
  // console.log(itemSibling);

  const { color_code, price, imgUrl, lens_color, model_code, polarized } = item;

  // @functions   format string functions
  const formatType = collection.type[0]
    .toUpperCase()
    .concat(collection.type.substring(1));

  const formatLensColor = lens_color.split('_').join(' ');

  return (
    <div className='product-container'>
      <div className='main-product-container'>
        {/* Description section */}
        <div className='description-container'>
          <h4 className='product-title'>{`${model_code} ${color_code}`}</h4>
          {collection.type === 'sunglasses' ? (
            <h4 className='product-title'>{formatLensColor}</h4>
          ) : null}
          {polarized ? <img src='/images/polarized.png' /> : null}

          <p className='description-text'>
            {' '}
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur ma
          </p>
        </div>

        {/* Image section */}
        <ProductImage imageUrl={imgUrl} {...otherProps} />

        {/* Size, Color, Add-To-Bag section */}
        <div className='description-container'>
          <h5 className='price'>{formatType}</h5>
          <h6 className='price'>{collection.title}</h6>
          <h5 className='price'>${price} CAD</h5>
          <p>Canada - Free shipping and return on all orders</p>

          <form>
            <div className='product-size-box'>
              <button className='size-btn'>SELECT FRAME SIZE</button>
            </div>
          </form>

          <button className='add-cart-btn' onClick={() => addItem(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectProduct(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  itemSibling: selectProductSibling(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
// export default ProductItem;
