import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({ item, match, history }) => {
  // Goal: grab the first whole nested object in each item - IE: first lens option of first color

  const { color, model, productType, gender } = item;
  const lens = color[0].lens[0];
  const { price, imgUrl, linkUrl } = lens;

  // [NOTE] function checks where the currentRoute is
  const handleClick = () => {
    // case: currentRoute is /shop/collectionId/genderId
    if (match.url.split('/').length === 4) {
      history.push(`${match.url}${linkUrl}`);
    } else if (match.url.split('/').length === 3) {
      // case: currentRoute is /shop/brandId
      history.push(`${productType}/${gender}${linkUrl}`);
    }
  };

  return (
    <div className='collection-item' onClick={() => handleClick()}>
      <div className='image' style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{model}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
