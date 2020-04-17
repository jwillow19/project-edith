import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/db';
import './header.styles.scss';
import logo from '../../assets/refine-logo.png';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
