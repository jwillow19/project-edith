import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selector';
import './collections-overview.styles.scss';
import CollectionsPreview from './CollectionsPreview';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionsPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
