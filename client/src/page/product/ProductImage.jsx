import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './product-image.styles.scss';

const ProductImage = ({ match, history, imageUrl, itemSibling }) => {
  const { color } = itemSibling;
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
    // console.log(e.target.src);
    let leadingUrl = match.url.split('/').slice(0, -1);
    const itemParam = e.target.src.split('/').slice(-1)[0].split('.')[0];
    leadingUrl.push(itemParam);
    leadingUrl = leadingUrl.join('/');
    console.log(leadingUrl);
    history.push(leadingUrl);
  };

  var itemSiblingArray = [];

  if (itemSiblingArray.length < 1) {
    color.forEach((frameObj) => {
      frameObj.lens.forEach((frameInstance) =>
        itemSiblingArray.push(frameInstance)
      );
    });
  }

  console.log(itemSiblingArray);

  // {color.forEach((frameObj) => {
  //   frameObj.lens.forEach((frameInstance) => {
  //     itemSiblingArray.push(frameInstance);
  //   });
  //   itemSiblingArray.map((sibling) => (
  //     <div
  //       key={sibling.id}
  //       className='slide'
  //       style={{ transform: `translateX(${x}%)` }}
  //     >
  //       <img
  //         src={sibling.imgUrl}
  //         onClick={(e) => handleMiniImageClick(e)}
  //       ></img>
  //     </div>
  //   ));
  // })}

  return (
    <div className='main-image-container'>
      <div className='product-image-large'>
        <img src={imageUrl} alt='product' />
      </div>

      <div className='mini-image-slider'>
        <ul>
          {/* List of images to map through */}
          {itemSiblingArray.map((sibling) => {
            return (
              <div
                key={sibling.id}
                className='slide'
                style={{ transform: `translateX(${x}%)` }}
              >
                <img
                  src={sibling.imgUrl}
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
