import React from 'react';
import { Route } from 'react-router-dom';
import ProductItem from '../product/ProductItem';

const ProductPage = ({ match }) => {
  // console.log('ProductPage fired');
  // console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={ProductItem} />
    </div>
  );
};

export default ProductPage;
