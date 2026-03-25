import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-contents">
        <h2>Savor Every Bite, <br/> Delivered to You</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients. Elevate your dining experience, one delicious meal at a time.</p>
        <button className='header-btn'>View Menu</button>
      </div>
    </header>
  );
};

export default Header;