import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo} alt="Logo" />
          <p>Lunchbox food delivery provides a convenient solution for individuals, particularly busy office workers and students, who need healthy and accessible meals without the need to cook or leave their location.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8804****65</li>
            <li>Lunchbox@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2025 @lunchbox.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
