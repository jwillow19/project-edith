import React from 'react';
import './product-styles.scss';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Product = ({ match }) => {
  console.log(match);
  return (
    <div className='product-container'>
      <div className='description-column'>DESCRIPTION</div>
      <div className='product-images'>SCROLLABLE IMG CONTENT</div>
      <div className='add-to-column'>PRICE, Add to bag</div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   product: selectProduct(ownProps)(state),
// });

export default connect()(Product);
