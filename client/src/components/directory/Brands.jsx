import React, { useState } from 'react';
import './brands.styles.scss';
import { Link } from 'react-router-dom';

const Brands = ({ match, history }) => {
  const [brandContent, setCollapse] = useState({
    isCollapsed: true,
  });

  const toggleCollapse = () => {
    setCollapse({ ...brandContent, isCollapsed: !brandContent.isCollapsed });
  };

  return (
    <div className='brands-section'>
      <div className='brands-container-title'>Our Designer Brands</div>
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
          <Link className='brand' to='/shop/tiffany'>
            <img src='/images/designer-brands/tiffany.png' alt='tiffany'></img>
          </Link>
        </div>
      </div>

      {/* Collapsible starts here */}
      <div
        className={
          brandContent.isCollapsed
            ? 'brands-container-collapsible'
            : 'brands-container-wrapper'
        }
      >
        <div className='brand-container'>
          <Link className='brand' to='/shop/ysl'>
            <img src='/images/designer-brands/ysl.png' alt='ysl'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/ralph'>
            <img src='/images/designer-brands/ralph.png' alt='ralph'></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/oliverpeoples'>
            <img
              src='/images/designer-brands/oliver_peoples.png'
              alt='oliverpeoples'
            ></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/dolce&gabbana'>
            <img
              src='/images/designer-brands/dolce&gabbana.png'
              alt='dolce'
            ></img>
          </Link>
        </div>

        <div className='brand-container'>
          <Link className='brand' to='/shop/prada'>
            <img src='/images/designer-brands/prada.png' alt='prada'></img>
          </Link>
        </div>
      </div>

      <a
        onClick={toggleCollapse}
        className='view-more-btn'
        style={{ hidden: `${brandContent.isCollapsed}` }}
      >
        VIEW MORE&darr;
      </a>
    </div>
  );
};

export default Brands;
