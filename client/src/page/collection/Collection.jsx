import React from 'react';
import CollectionItem from '../../components/collections/CollectionItem';
import { connect } from 'react-redux';
import {
  selectCollection,
  selectCollectionGender,
} from '../../redux/selectors/shop.selector';

import './collection.styles.scss';

const Collection = ({ match, location, collection, genderedCollection }) => {
  // console.log(match);
  // console.log(collection);
  // console.log(genderedCollection);

  const { title } = collection;
  // const { items } = genderedCollection;
  // <Route
  //       path={`${match.path}/:collectionId/:productId`}
  //       component={ProductItem}
  //     />
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {genderedCollection.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// grabbing the url-param with ownProps; collection is collect-object
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  genderedCollection: selectCollectionGender(
    ownProps.match.params.collectionId,
    ownProps.match.params.genderId
  )(state),
});
export default connect(mapStateToProps)(Collection);
