import React from 'react';
import './product-item.styles.scss';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import {
  selectProduct,
  selectCollection,
} from '../../redux/selectors/shop.selector';

const ProductItem = ({ item, collection, addItem }) => {
  // console.log(collection);

  // <div className='main-image-container'>
  //   <div className='large-image'>
  //     <img src={imageUrl} alt='product' />
  //   </div>
  //   <div className='mini-images'></div>
  // </div>;

  const { name, imageUrl, price } = item;
  return (
    <div className='product-container'>
      <div className='main-product-container'>
        <div className='description-container'>
          <h4 className='product-title'>{name}</h4>
          <p className='description-text'>
            {' '}
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur ma
          </p>
        </div>
        <ProductImage imageUrl={imageUrl} />

        <div className='description-container'>
          <h5 className='price'>{collection.title}</h5>
          <h6 className='price'>BrandNameGoesHere</h6>
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
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
// export default ProductItem;
