import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <Button>CHECKOUT</Button>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
