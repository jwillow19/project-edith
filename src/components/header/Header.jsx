import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';
const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/login'>
          SIGNIN
        </Link>
        <Link className='option' to='/cart'>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
