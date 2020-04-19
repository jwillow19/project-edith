import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartItemsPrice,
} from '../../redux/selectors/cart.selector';

import './checkout.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='checkout-block'>
          <span>Item</span>
        </div>
        <div className='checkout-block'>
          <span>Description</span>
        </div>
        <div className='checkout-block'>
          <span>Price</span>
        </div>
        <div className='checkout-block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <div>{cartItem.name}</div>
      ))}
      <div className='total'>
        <span>Total {totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice,
});

export default connect(mapStateToProps)(Checkout);
