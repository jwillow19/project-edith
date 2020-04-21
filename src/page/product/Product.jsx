import React from 'react';
import './product-styles.scss';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from '../collection/Collection    ';

const Product = ({ match }) => {
  console.log(match);
  return (
    <div className='product-container'>
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   product: selectProduct(ownProps)(state),
// });

// export default connect()(Product);
