import React from 'react';
import DirectoryMenu from '../../components/directory/DirectoryMenu';
import './homepage.styles.scss';
// import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div className='homepage'>
      <DirectoryMenu />
    </div>
  );
};

// Home.propTypes = {};

export default Home;
