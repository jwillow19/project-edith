import React from 'react';
// import './footer.styles.scss';
import './footer-grid.styles.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='general-information-row'>
        <div className='col-1-of-6'>
          <ul className='footer__list'>
            <h5>Products</h5>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Sunglasses
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Eyeglasses
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Accessories
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
        <div className='col-1-of-6'>
          <ul className='footer__list'>
            <h5>Eyecare 101</h5>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Our Lenses
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Vision Guide
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Measure your PD
              </a>
            </li>
          </ul>
        </div>
        <div className='col-1-of-6'>
          <ul className='footer__list'>
            <h5>About Us</h5>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Out Story
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Company Vision
              </a>
            </li>
          </ul>
        </div>

        <div className='col-1-of-6'>
          <ul className='footer__list'>
            <h5>Offers & Discount</h5>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Insurance
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Promotional Items
              </a>
            </li>
          </ul>
        </div>

        <div className='col-2-of-6'>
          <ul className='footer__list'>
            <h5>Need a hand? Contact us!</h5>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Email:
              </a>
            </li>
            <li className='footer__item'>
              <a href='#' className='footer__link'>
                Text:
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='social-icon-row'>
        <div className='social-icons'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='#'>
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li className='footer__item'>
              <a href='#'>
                <i className='fa fa-github'></i>
              </a>
            </li>
            <li className='footer__item'>
              <a href='#'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
