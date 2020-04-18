import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { handleCartClick } from '../../redux/actions/cart';

const CartDropdown = ({ handleCartClick }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button onClick={handleCartClick}>CHECKOUT</Button>
    </div>
  );
};

// CartDropdown.propTypes = {
//   handleCartClick: PropTypes.func.isRequired,
// };
// const mapStateToProps = (state) => ({
//   cart: state.cart,
// });
export default connect(null, { handleCartClick })(CartDropdown);
