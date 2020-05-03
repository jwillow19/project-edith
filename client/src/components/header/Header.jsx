import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/selectors/cart.selector';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import { signOutStart } from '../../redux/actions/user';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className='header'>
      <div className='options-left'>
        <Link className='option' to='/men'>
          MEN
        </Link>
        <Link className='option' to='/women'>
          WOMEN
        </Link>
        <Link className='option' to='/search'>
          SEARCH
        </Link>
      </div>

      <div className='options-center'>
        <Link className='option' to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => signOutStart()}>
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
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// Header.propTypes = {
//   currentUser: PropTypes.object.isRequired,
//   hidden: PropTypes.object.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
