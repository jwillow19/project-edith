import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';
import EyewearDropdownMenu from './Dropdown';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/selectors/cart.selector';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import { signOutStart } from '../../redux/actions/user';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [open, setOpen] = useState({
    productType: '',
    eyewearOpen: false,
    contactsOpen: false,
  });
  const { eyewearOpen, contactsOpen, productType } = open;

  return (
    <div className='header'>
      <div className='row'>
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

        <div className='options-right'>
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

      <div className='row'>
        <div className='nav-links'>
          <Link className='option' to='/'>
            <a
              onClick={() =>
                setOpen({
                  ...open,
                  eyewearOpen: !eyewearOpen,
                  productType: 'eyeglasses',
                })
              }
            >
              Eyeglasses
            </a>
          </Link>
          <Link className='option' to='/'>
            <a
              onClick={() =>
                setOpen({
                  ...open,
                  eyewearOpen: !eyewearOpen,
                  productType: 'sunglasses',
                })
              }
            >
              Sunglasses
            </a>
          </Link>
          <Link className='option' to='/'>
            <a
              onClick={() =>
                setOpen({
                  ...open,
                  contactsOpen: !contactsOpen,
                  productType: 'contacts',
                })
              }
            >
              Contact Lenses
            </a>
          </Link>
        </div>
      </div>

      {eyewearOpen ? <EyewearDropdownMenu productType={productType} /> : null}
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
