import React from 'react';
import './product-item.styles.scss';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import {
  selectProduct,
  selectProductSibling,
  selectProductModel,
} from '../../redux/selectors/shop.selector';

const ProductItem = ({
  // match,
  // history,
  item,
  productModel,
  addItem,
  // itemSibling,
  ...otherProps
}) => {
  const {
    color_code,
    price,
    size,
    imgUrl,
    lens_color,
    model_code,
    polarized,
  } = item;
  const { brand, productType, material, frameType, shape } = productModel;

  // @functions   format string functions
  const formatType = productType[0]
    .toUpperCase()
    .concat(productType.substring(1));

  const formatLensColor = lens_color.split('_').join(' ');

  return (
    <div className='product-container'>
      <div className='main-product-container'>
        {/* Description section */}
        <div className='description-container'>
          <h4 className='product-title'>{`${model_code} ${color_code}`}</h4>
          {productType === 'sunglasses' ? (
            <h4 className='product-title'>{formatLensColor}</h4>
          ) : null}
          {polarized ? (
            <img src='/images/polarized.png' alt='polarize-tag' />
          ) : null}

          <p className='description-text'>Frame Material: {material}</p>
          <p className='description-text'>{`Frame Shape: ${shape}`}</p>
          <p className='description-text'>{`Frame Type: ${frameType}`}</p>
        </div>

        {/* Image section */}
        <ProductImage imageUrl={imgUrl} {...otherProps} />

        {/* Size, Color, Add-To-Bag section */}
        <div className='description-container'>
          <h5 className='price'>{formatType}</h5>
          <h6 className='price'>{brand}</h6>
          <h5 className='price'>${price} CAD</h5>
          <p>Canada - Free shipping and return on all orders</p>

          <form>
            <div className='product-size-box'>
              {size.map((avaliableSize) => (
                <button key={avaliableSize} className='size-btn'>
                  {avaliableSize}
                </button>
              ))}
            </div>
          </form>

          {console.log(item)}
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
  // collection: selectCollection(ownProps.match.params.collectionId)(state),
  itemSibling: selectProductSibling(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),

  productModel: selectProductModel(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (productItem) => dispatch(addItem(productItem)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
