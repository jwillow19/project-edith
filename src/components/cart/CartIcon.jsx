import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { handleCartClick } from '../../redux/actions/cart';
import './cart-icon.styles.scss';

const CartIcon = ({ handleCartClick }) => {
  return (
    <div className='cart-icon'>
      <IconButton onClick={handleCartClick}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
      </IconButton>
    </div>
  );
};

CartIcon.propTypes = {
  handleCartClick: PropTypes.func.isRequired,
};

export default connect(null, { handleCartClick })(CartIcon);
