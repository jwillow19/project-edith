import React, { useReducer } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './trending.styles.scss';

const INITIAL_STATE = {
  x: 0,
  trending: [
    '/images/shop-img/eyeglasses/burberry/BE12821001.png',
    '/images/shop-img/eyeglasses/dolce/DG13241334.png',
    '/images/shop-img/eyeglasses/versace/VE12641436.png',
    '/images/shop-img/eyeglasses/oakley/OX3222322203.png',
    '/images/shop-img/sunglasses/BE430738314L.png',
    '/images/shop-img/sunglasses/RB302500157.png',
    '/images/shop-img/eyeglasses/prada/PR62UVYEE1O1.png',
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SLIDE_LEFT':
      return {
        ...state,
        x: state.x === 0 ? -100 * (state.trending.length - 1) : state.x + 100,
      };
    case 'SLIDE_RIGHT':
      return {
        ...state,
        x: state.x === -100 * (state.trending.length - 1) ? 0 : state.x - 100,
      };
    default:
      return state;
  }
};

const slideRight = () => ({
  type: 'SLIDE_RIGHT',
});
const slideLeft = () => ({
  type: 'SLIDE_LEFT',
});

const TrendingSection = ({ match, history }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { x, trending } = state;

  const handleMiniImageClick = (e) => {
    let fullPath = e.target.src.split('/').slice(-3).join('/').split('.')[0];
    fullPath = '/shop/'.concat(fullPath);
    history.push(fullPath);
  };

  return (
    <div className='trending-section'>
      <div className='trending-section-title'> TRENDING NOW</div>

      <div className='mini-image-slider'>
        <ul>
          {/* List of images to map through */}
          {trending.map((item) => {
            return (
              <div
                key={item}
                className='slide'
                style={{ transform: `translateX(${x}%)` }}
              >
                <img src={item} onClick={(e) => handleMiniImageClick(e)}></img>
              </div>
            );
          })}
        </ul>
        <button id='slideLeft' onClick={() => dispatch(slideLeft())}>
          &#x2190;
        </button>
        <button id='slideRight' onClick={() => dispatch(slideRight())}>
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default withRouter(TrendingSection);
