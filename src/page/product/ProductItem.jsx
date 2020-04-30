import React from 'react';
import './product-item.styles.scss';
import { addItem } from '../../redux/actions/cart';
import { connect } from 'react-redux';

import { selectProduct } from '../../redux/selectors/shop.selector';

const ProductItem = ({ item, addItem }) => {
  console.log(item);
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

        <div className='main-image-container'>
          <div className='large-image'>
            <img src={imageUrl} alt='product-image' />
          </div>
          <div className='mini-images'></div>
        </div>

        <div className='description-container'>
          <h5 className='price'>${price} CAD</h5>
          <p>Canada - Free shipping and return on all orders</p>
          <form>
            <p className='product-color-chart'>color goes here</p>

            <div class='product-size-dropdown'>
              <button class='dropbtn'>
                SELECT FRAME SIZE
                <i class='fa fa-caret-down'></i>
              </button>
              <div class='dropdown-content'>
                <a href='#'>Link 1</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
              </div>
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
});
export default connect(mapStateToProps, { addItem })(ProductItem);
// export default ProductItem;
