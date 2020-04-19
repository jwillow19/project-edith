import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price, classes }) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted>Add to bag</CustomButton>
    </div>
  );
};

export default CollectionItem;
