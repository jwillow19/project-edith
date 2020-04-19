import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to bag
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(CollectionItem);
