import React from 'react';
import { Link } from 'react-router-dom';
import { toggleDropdown } from '../../redux/actions/directory';
import { connect } from 'react-redux';
import './dropdown-menu.styles.scss';

const ContactLenseDropdownMenu = ({ productType, toggleDropdown }) => {
  return (
    <div className='nav-wrapper'>
      <ul className='nav-menu' onClick={toggleDropdown}>
        <li className={`nav-menu__list-item__${productType}`}>
          <Link className='nav-link' to={`/shop/${productType}/men`}>
            <span>Shop Contact Lenses</span>
          </Link>
        </li>
        <li
          onClick={toggleDropdown}
          className={`nav-menu__list-item__color-${productType}`}
        >
          <Link className='nav-link' to={`/shop/${productType}/women`}>
            <span>Shop Colored Contact Lenses</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(null, mapDispatchToProps)(ContactLenseDropdownMenu);
