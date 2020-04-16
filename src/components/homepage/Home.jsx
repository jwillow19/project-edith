import React from 'react';
// import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Women</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>

          <div className='content'>
            <h1 className='title'>Men</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>

          <div className='content'>
            <h1 className='title'>Eyeglasses</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>

          <div className='content'>
            <h1 className='title'>Sunglasses</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>

          <div className='content'>
            <h1 className='title'>Contact Lenses</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home.propTypes = {};

export default Home;
