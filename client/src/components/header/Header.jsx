import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';
import EyewearDropdownMenu from './Eyewear.dropdown.menu';
import ContactLenseDropdownMenu from './ContactLense.dropdown.menu';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/selectors/cart.selector';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import {
  selectDropdown,
  selectEyewear,
  selectSunwear,
  selectContacts,
} from '../../redux/selectors/directory.selector';

import { signOutStart } from '../../redux/actions/user';
import {
  toggleDropdown,
  toggleEyewear,
  toggleSunwear,
  toggleContacts,
} from '../../redux/actions/directory';

const Header = ({
  currentUser,
  hidden,
  signOutStart,
  isEyewear,
  isSunwear,
  isContact,
  toggleEyewear,
  toggleSunwear,
  toggleContacts,
}) => {
  const [catalog, setCatalog] = useState({
    productType: '',
    isEyewear: false,
    isSunwear: false,
    isContact: false,
  });

  const handleDropdownClick = (productType) => {
    console.log('fired');
    setCatalog({
      ...catalog,
      productType,
    });
    if (productType === 'eyeglasses') {
      toggleEyewear();
    } else if (productType === 'sunglasses') {
      toggleSunwear();
    } else if (productType === 'contacts') {
      toggleContacts();
    } else {
      return;
    }
  };

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
          <div className='nav-links__wrapper'>
            <a onClick={() => handleDropdownClick('eyeglasses')}>Eyeglasses</a>
          </div>
          <div className='nav-links__wrapper'>
            <a onClick={() => handleDropdownClick('sunglasses')}>Sunglasses</a>
          </div>

          <div className='nav-links__wrapper'>
            <a onClick={() => handleDropdownClick('contacts')}>
              Contact Lenses
            </a>
          </div>
        </div>
      </div>
      {isEyewear || isSunwear ? (
        <EyewearDropdownMenu productType={catalog.productType} />
      ) : isContact ? (
        <ContactLenseDropdownMenu productType={catalog.productType} />
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser,
  dropdownMenu: selectDropdown,
  isEyewear: selectEyewear,
  isSunwear: selectSunwear,
  isContact: selectContacts,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDropdown: () => dispatch(toggleDropdown()),
  toggleEyewear: () => dispatch(toggleEyewear()),
  toggleSunwear: () => dispatch(toggleSunwear()),
  toggleContacts: () => dispatch(toggleContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
