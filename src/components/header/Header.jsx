import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/db';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

const Header = ({ user, cart }) => {
  const { currentUser } = user;
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/login'>
            LOGIN
          </Link>
        )}

        <Link className='option' to='/cart'>
          CONTACT
        </Link>

        <CartIcon />
      </div>
      {cart.hidden ? null : <CartDropdown />}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
