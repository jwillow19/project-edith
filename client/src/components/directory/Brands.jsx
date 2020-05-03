import React from 'react';
import './brands.styles.scss';
import { Link } from 'react-router-dom';

const Brands = () => {
  return (
    <div className='brands-section'>
      <div className='brands-container-title'>DESIGNER BRANDS GO HERE</div>
      <div className='brands-container-wrapper'>
        <div className='brand-container'>
          <Link className='brand' to='/shop/rayban'>
            <img src='/images/designer-brands/rayban.png' alt='rayban'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/burberry'>
            <img
              src='/images/designer-brands/burberry.png'
              alt='burberry'
            ></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/gucci'>
            <img src='/images/designer-brands/gucci.png' alt='gucci'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/coach'>
            <img src='/images/designer-brands/coach.png' alt='coach'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/tomford'>
            <img src='/images/designer-brands/tomford.png' alt='tomford'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/versace'>
            <img src='/images/designer-brands/versace.png' alt='versace'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/versace'>
            <img src='/images/designer-brands/versace.png' alt='versace'></img>
          </Link>
        </div>
      </div>

      <a href='#' className='view-more-btn'>
        VIEW MORE&darr;
      </a>
    </div>
  );
};

export default Brands;
