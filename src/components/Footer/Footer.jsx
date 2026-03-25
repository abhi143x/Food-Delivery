import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Provides a premium dark-mode footer with structured grid columns and social links.
 */
const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">
        
        {/* Brand & Description */}
        <div className="footer-content-left">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className='footer-logo' src={assets.logo} alt="LunchBox Logo" />
          </Link>
          <p>Lunchbox food delivery provides a premium, convenient solution for busy individuals. We guarantee healthy, accessible, and delicious meals without the need to cook or leave your location. Savor every bite.</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+918804000065" className="contact-link">+91 8804****65</a>
            </li>
            <li>
              <a href="mailto:Lunchbox@gmail.com" className="contact-link">Lunchbox@gmail.com</a>
            </li>
          </ul>
        </div>
        
      </div>

      <hr className="footer-divider" />
      
      <p className="footer-copyright">
        Copyright 2025 © Lunchbox.com - All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
