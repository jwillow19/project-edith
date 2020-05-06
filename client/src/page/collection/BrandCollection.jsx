import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectBrandCollection } from '../../redux/selectors/shop.selector';
import CollectionItem from '../../components/collections/CollectionItem';

const BrandCollection = ({ match, brandCollection }) => {
  const brand = match.url.split('/').slice(-1)[0];
  //   const formatBrand = brand[0].toUpperCase().concat(brand.substring(1));
  const formatBrand = brand.toUpperCase();

  return (
    <div className='collection-page'>
      <h2 className='title'>{formatBrand}</h2>
      <div className='items'>
        {brandCollection.map((item) => (
          <CollectionItem key={item.model} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  brandCollection: selectBrandCollection(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(BrandCollection);
