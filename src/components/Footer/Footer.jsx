import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets' 

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus consectetur, inventore nemo sunt corporis ipsam deleniti in omnis eius perferendis voluptas iure, corrupti id!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 8804****65 </li>
                        <li>Lunchbox@gmail.com</li>
                    </ul>
                 </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 @lunchbox.com - All Right Reserved.</p>
        </div>
  )
}

export default Footer