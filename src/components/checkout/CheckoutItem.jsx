import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  removeItem,
  decreaseItemCount,
  increaseItemCount,
} from '../../redux/actions/cart';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem,
  removeItem,
  decreaseItemCount,
  increaseItemCount,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>

      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItemCount(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseItemCount(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className='price'>${price}</span>
      <div onClick={() => removeItem(cartItem)}>
        <span className='remove-icon'>&#10005;</span>
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
  decreaseItemCount: PropTypes.func.isRequired,
  increaseItemCount: PropTypes.func.isRequired,
};
export default connect(null, {
  removeItem,
  decreaseItemCount,
  increaseItemCount,
})(CheckoutItem);
