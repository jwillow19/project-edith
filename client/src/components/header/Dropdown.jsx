import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown-menu.styles.scss';

const EyewearDropdownMenu = ({ productType }) => {
  return (
    <div className='nav-wrapper'>
      <ul className='nav-menu'>
        <li className='nav-menu__list-item'>
          <Link className='nav-link' to={`/shop/${productType}/men`}>
            <span>Shop Men</span>
          </Link>
        </li>
        <li className='nav-menu__list-item'>
          <Link className='nav-link' to={`/shop/${productType}/women`}>
            <span>Shop Women</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default EyewearDropdownMenu;
