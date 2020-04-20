import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item }) => {
  const { name, price, imageUrl, id, quantity } = item;
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;