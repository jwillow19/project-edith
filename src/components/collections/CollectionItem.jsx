import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({ item, routeName, match, history }) => {
  const { name, imageUrl, price, linkUrl } = item;
  console.log(match);

  // [NOTE] function checks where the currentRoute is
  const handleClick = () => {
    // case: currentRoute is collection page (eg. /shop/hats)
    if (match.url.split('/')[-1] == routeName) {
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
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
