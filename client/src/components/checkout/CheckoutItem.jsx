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
  const { model_code, color_code, imgUrl, price, quantity } = cartItem;
  console.log(cartItem);

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imgUrl} />
      </div>

      <span className='name'>{`${model_code}-${color_code}`}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItemCount(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => increaseItemCount(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className='price'>${quantity * price}</span>

      <div onClick={() => removeItem(cartItem)}>
        <span className='remove-button'>&#10005;</span>
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  removeItem: PropTypes.func.isRequired,
  decreaseItemCount: PropTypes.func.isRequired,
  increaseItemCount: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  decreaseItemCount: (cartItem) => dispatch(decreaseItemCount(cartItem)),
  increaseItemCount: (cartItem) => dispatch(increaseItemCount(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
