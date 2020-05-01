import React from 'react';
import CollectionItem from './CollectionItem';
import { withRouter } from 'react-router-dom';
import './collections-preview.styles.scss';

const CollectionsPreview = ({ match, history, title, items, routeName }) => {
  const handleTitleClick = () => {
    history.push(`${match.url}/${title.toLowerCase()}`);
  };

  console.log(match.url);
  return (
    <div className='collection-preview'>
      <div onClick={() => handleTitleClick()}>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </div>

      <div className='preview'>
        {items
          .filter((item, ind) => ind < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} routeName={routeName} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionsPreview);
