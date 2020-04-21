import React from 'react';
import CollectionItem from './CollectionItem';
import './collections-preview.styles.scss';

const CollectionsPreview = ({ title, items, routeName }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
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

export default CollectionsPreview;
