import React from 'react';
import CollectionItem from '../../components/collections/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/selectors/shop.selector';

const ProductsOverview = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// grabbing the url-param with ownProps; collection is collect-object
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(ProductsOverview);
