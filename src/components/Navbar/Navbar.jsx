import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); 

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        {/* Logo */}
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 

        {/* Menu items (desktop) */}
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <Link 
            to='/' 
            onClick={() => {setMenu("home"); setIsOpen(false)}} 
            className={menu==="home"?"active":""}>Home</Link>

          <a href='#explore-menu' 
            onClick={() => {setMenu("menu"); setIsOpen(false)}} 
            className={menu==="menu"?"active":""}>Menu</a>

          <a href='#app-download' 
            onClick={() => {setMenu("mobile-app"); setIsOpen(false)}} 
            className={menu==="mobile-app"?"active":""}>Mobile-app</a>

          <a href='#footer' 
            onClick={() => {setMenu("contact us"); setIsOpen(false)}} 
            className={menu==="contact us"?"active":""}>Contact Us</a>
        </ul>

        {/* Right section */}
        <div className="navbar-right">
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>

          {/* Toggle button yaha pe daala */}
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </div>
        </div>

        {/* Overlay background blur */}
        {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}
    </div>
  )
}

export default Navbar