import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // App starts in dark mode
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();

  // Apply theme to document element automatically
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Sync menu state with active route
  useEffect(() => {
    if (location.pathname === '/cart') {
      setMenu('cart');
    } else if (location.pathname === '/' && menu === 'cart') {
      setMenu('home');
    }
  }, [location, menu]);

  return (
    <nav className="navbar">
      <Link to='/' onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link to='/' onClick={() => { setMenu("home"); setIsOpen(false); }} className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        {location.pathname === '/' && (
          <>
            <li>
              <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsOpen(false); }} className={menu === "menu" ? "active" : ""}>Menu</a>
            </li>
            <li>
              <a href='#app-download' onClick={() => { setMenu("mobile-app"); setIsOpen(false); }} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            </li>
          </>
        )}
        <li>
          <a href='#footer' onClick={() => { setMenu("contact us"); setIsOpen(false); }} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <div 
          className={`theme-toggle-switch ${theme}`} 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          <div className="toggle-circle">
            <span className="icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
          </div>
        </div>
        <Link to='/cart' className={`navbar-search-icon ${menu === "cart" ? "active" : ""}`} aria-label="Cart" onClick={() => window.scrollTo(0, 0)}>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </Link>
        <button onClick={() => setShowLogin(true)} className="btn-signin">Sign In</button>
        
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;