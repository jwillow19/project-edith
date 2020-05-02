import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './product-image.styles.scss';

const ProductImage = ({ match, history, imageUrl }) => {
  // console.log(match);
  const imgArry = [
    '/images/shop-img/hats/blue-beanie.png',
    '/images/shop-img/hats/brown-brim.png',
    '/images/shop-img/hats/blue-beanie.png',
  ];
  const [x, setX] = useState(0);

  const slideLeft = () => {
    x === 0 ? setX(-100 * (imgArry.length - 1)) : setX(x + 100);
  };
  const slideRight = () => {
    x === -100 * (imgArry.length - 1) ? setX(0) : setX(x - 100);
  };
  const handleMiniImageClick = (e) => {
    // console.log(imgPath.target.src);
    let leadingUrl = match.url.split('/').slice(0, -1);
    const itemParam = e.target.src.split('/').slice(-1)[0].split('.')[0];
    leadingUrl.push(itemParam);
    leadingUrl = leadingUrl.join('/');
    console.log(leadingUrl);
    history.push(leadingUrl);
  };

  return (
    <div className='main-image-container'>
      <div className='product-image-large'>
        <img src={imageUrl} alt='product' />
      </div>

      <div className='mini-image-slider'>
        <ul>
          {/* List of images to map through */}
          {imgArry.map((imgPath, index) => {
            // let url = match.url.split('/').slice(0, -1);
            // const itemParam = imgPath.split('/').slice(-1)[0].split('.')[0];
            // url.push(itemParam);
            // url = url.join('/');
            // console.log(itemParam);
            return (
              <div
                key={index}
                className='slide'
                style={{ transform: `translateX(${x}%)` }}
              >
                <img
                  src={imgPath}
                  onClick={(e) => handleMiniImageClick(e)}
                ></img>
              </div>
            );
          })}
        </ul>
        <button id='slideLeft' onClick={slideLeft}>
          left
        </button>
        <button id='slideRight' onClick={slideRight}>
          right
        </button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//     item: selectProduct(
//       ownProps.match.params.productId,
//       ownProps.match.params.collectionId
//     )(state),
//     collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default ProductImage;
