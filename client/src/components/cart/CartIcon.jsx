import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/actions/cart';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/selectors/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cart-icon'>
      <IconButton onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
      </IconButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
