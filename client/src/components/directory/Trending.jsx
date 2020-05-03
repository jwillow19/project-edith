import React, { useReducer } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './trending.styles.scss';

const INITIAL_STATE = {
  x: 0,
  trending: [
    '/images/designer-brands/burberry.png',
    '/images/designer-brands/dolce.png',
    '/images/designer-brands/oakley.png',
    '/images/designer-brands/dior.png',
    '/images/designer-brands/tiffany.png',
    '/images/designer-brands/versace.png',
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
    let leadingUrl = match.url.split('/').slice(0, -1);
    const itemParam = e.target.src.split('/').slice(-1)[0].split('.')[0];
    leadingUrl.push(itemParam);
    leadingUrl = leadingUrl.join('/');
    console.log(leadingUrl);
    history.push(leadingUrl);
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
