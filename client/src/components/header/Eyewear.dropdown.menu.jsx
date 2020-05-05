import React from 'react';
import { Link } from 'react-router-dom';
import { toggleDropdown } from '../../redux/actions/directory';
import { connect } from 'react-redux';
import './dropdown-menu.styles.scss';

const EyewearDropdownMenu = ({ productType, toggleDropdown }) => {
  return (
    <div className='nav-wrapper'>
      <ul className='nav-menu'>
        <li
          onClick={toggleDropdown}
          className={`nav-menu__list-item__men-${productType}`}
        >
          <Link className='nav-link' to={`/shop/${productType}/men`}>
            <span>Shop Men</span>
          </Link>
        </li>
        <li
          onClick={toggleDropdown}
          className={`nav-menu__list-item__women-${productType}`}
        >
          <Link className='nav-link' to={`/shop/${productType}/women`}>
            <span>Shop Women</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(null, mapDispatchToProps)(EyewearDropdownMenu);
