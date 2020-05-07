import React from 'react';
import { Link } from 'react-router-dom';
import { closeDropdown } from '../../redux/actions/directory';
import { connect } from 'react-redux';
import './dropdown-menu.styles.scss';

const EyewearDropdownMenu = ({ productType, closeDropdown }) => {
  return (
    <div className='nav-wrapper'>
      <ul className='nav-menu'>
        <div
          onClick={closeDropdown}
          className={`nav-menu__list-item__men-${productType}`}
        >
          <Link className='nav-link' to={`/shop/${productType}/men`}>
            <span>Shop Men</span>
          </Link>
        </div>
        <div
          onClick={closeDropdown}
          className={`nav-menu__list-item__women-${productType}`}
        >
          <Link className='nav-link' to={`/shop/${productType}/women`}>
            <span>Shop Women</span>
          </Link>
        </div>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeDropdown: () => dispatch(closeDropdown()),
});

export default connect(null, mapDispatchToProps)(EyewearDropdownMenu);
