import React from 'react';
import './product-item.styles.scss';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import {
  selectProduct,
  selectProductSibling,
  selectProductModel,
  selectProductFromBrandList,
} from '../../redux/selectors/shop.selector';

// return (
//   <div className='product-container'>
//     <div className='main-product-container'>
//       {/* Description section */}
//       <div className='description-container'>
//         <h4 className='product-title'>{`${model_code} ${color_code}`}</h4>
//         {productType === 'sunglasses' ? (
//           <h4 className='product-title'>{formatLensColor}</h4>
//         ) : null}
//         {polarized ? <img src='/images/polarized.png' /> : null}

//         <p className='description-text'>
//           {' '}
//           "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//           quae ab illo inventore veritatis et quasi architecto beatae vitae
//           dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//           aspernatur aut odit aut fugit, sed quia consequuntur ma
//         </p>
//       </div>

//       {/* Image section */}
//       <ProductImage imageUrl={imgUrl} {...otherProps} />

//       {/* Size, Color, Add-To-Bag section */}
//       <div className='description-container'>
//         <h5 className='price'>{formatType}</h5>
//         <h6 className='price'>{brand}</h6>
//         <h5 className='price'>${price} CAD</h5>
//         <p>Canada - Free shipping and return on all orders</p>

//         <form>
//           <div className='product-size-box'>
//             <button className='size-btn'>SELECT FRAME SIZE</button>
//           </div>
//         </form>

//         <button className='add-cart-btn' onClick={() => addItem(item)}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   </div>
// );

const BrandProductItem = ({
  // match,
  // history,
  product,
  // productModel,
  addItem,
  // itemSibling,
  ...otherProps
}) => {
  return <div className='wrapper'>THIS IS IT</div>;
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProductFromBrandList(
    ownProps.match.params.productId,
    ownProps.match.params.collectionId
  )(state),

  // productModel: selectProductModel(
  //   ownProps.match.params.productId,
  //   ownProps.match.params.collectionId
  // )(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrandProductItem);
