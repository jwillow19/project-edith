import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/actions/cart';
import { selectCartItems } from '../../redux/selectors/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, toggleCart }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>

      <Button
        onClick={() => {
          history.push('/checkout');
          toggleCart();
        }}
      >
        CHECKOUT
      </Button>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  toggleCart: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCart })(CartDropdown)
);
