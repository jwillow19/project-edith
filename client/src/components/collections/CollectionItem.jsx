import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({ item, routeName, match, history }) => {
  // const { name, imageUrl, price, linkUrl } = item;

  // color DTYPE: ARRAY
  // Goal: grab the first whole nested object in each item - IE: first lens option of first color
  const { color, material, type, model, shape } = item;
  const lens = color[0].lens[0];
  const {
    frame_color,
    color_code,
    lens_color,
    isPolarize,
    price,
    imgUrl,
    linkUrl,
  } = lens;

  // [NOTE] function checks where the currentRoute is
  const handleClick = () => {
    // case: currentRoute is collection page (eg. /shop/hats)
    if (match.url.split('/')[-1] === routeName) {
      history.push(`${match.url}${linkUrl}`);
    } else {
      // case: currentRoute is in CollectionOverview (eg. /shop)
      history.push(`${match.url}/${routeName}${linkUrl}`);
    }
  };

  // () => history.push(`${match.url}${linkUrl}`)

  return (
    //
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
