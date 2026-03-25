import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <section className='app-download' id='app-download'>
      <h2 className='paragraph'>
        For Better Experience Download <br /> 
        The <span className="highlight">LunchBox</span> App
      </h2>
      <div className="app-download-platforms">
        <a href="#playstore" aria-label="Download on Google Play">
            <img src={assets.play_store} alt="Google Play Store" />
        </a>
        <a href="#appstore" aria-label="Download on App Store">
            <img src={assets.app_store} alt="Apple App Store" />
        </a>
      </div>
    </section>
  );
};

export default AppDownload;