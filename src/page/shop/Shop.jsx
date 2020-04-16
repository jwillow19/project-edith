import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionsPreview from '../../components/collections/CollectionsPreview';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionsPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
