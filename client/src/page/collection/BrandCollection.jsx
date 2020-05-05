import React, { useEffect } from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectBrandCollection } from '../../redux/selectors/shop.selector';
import CollectionItem from '../../components/collections/CollectionItem';

const BrandCollection = ({ match, brandCollection }) => {
  //   console.log(brandCollection);

  const brand = match.url.split('/').slice(-1)[0];
  //   const formatBrand = brand[0].toUpperCase().concat(brand.substring(1));
  const formatBrand = brand.toUpperCase();

  // const { items } = genderedCollection;
  // <Route
  //       path={`${match.path}/:collectionId/:productId`}
  //       component={ProductItem}
  //     />
  return (
    <div className='collection-page'>
      <h2 className='title'>{formatBrand}</h2>
      <div className='items'>
        {brandCollection.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
//   brandCollection: selectCollectionGender(
//     ownProps.match.params.collectionId,
//     ownProps.match.params.genderId
//   )(state),
// });

const mapStateToProps = (state, ownProps) => ({
  brandCollection: selectBrandCollection(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(BrandCollection);
