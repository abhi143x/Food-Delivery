import React, { useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';

const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for authenticating the user
  };

  return (
    <div className='login-popup' role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2 id="modal-title">{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close modal" 
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setShowLogin(false)}
          />
        </div>
        
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder='Your name' required aria-label="Your name" />
          )}
          <input type="email" placeholder='Your email' required aria-label="Your email" />
          <input type="password" placeholder='Password' required aria-label="Password" />
        </div>
        
        <button type="submit" className="btn-submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        
        <div className="login-popup-condition">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
        
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;