import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/actions/cart';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart }) => {
  return (
    <div className='cart-icon'>
      <IconButton onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
      </IconButton>
    </div>
  );
};

CartIcon.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default connect(null, { toggleCart })(CartIcon);
