import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cart';
import { withRouter, Route, Redirect } from 'react-router-dom';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, match, history }) => {
  const { name, imageUrl, price, linkUrl } = item;

  // <Route exact path={`${match.url}/:productId`} component={Product} />

  return (
    //
    <div
      className='collection-item'
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to bag
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(null, { addItem })(withRouter(CollectionItem));
