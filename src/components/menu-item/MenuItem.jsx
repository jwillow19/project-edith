import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    // history.push(matchUrl+linkUrl) to new page
    <div
      className={`menu-item ${size}`}
      onClick={(e) => history.push(`${match}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
