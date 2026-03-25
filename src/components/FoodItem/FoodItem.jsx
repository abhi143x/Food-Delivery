// FoodItem.jsx
import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

/**
 * FoodItem Component
 * Renders a premium interactive card for a single food item.
 * Connects to `StoreContext` for state preserved cart management.
 */
const FoodItem = ({ id, name, price, description, image }) => {
  // Extract state and actions from Context API ensuring full state preservation
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Derive cart state cleanly
  const cartItemCount = cartItems[id] || 0;
  const isInCart = cartItemCount > 0;

  return (
    <article className="food-item">
      {/* Visual Header with Image and Overlay Controls */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} loading="lazy" />

        {/* Quick Link to Cart - dynamically rendered */}
        {isInCart && (
          <Link to="/cart" className="basket-icon" aria-label="Go to Checkout" onClick={() => window.scrollTo(0, 0)}>
            <img src={assets.basket_icon} alt="Basket" />
            <span>Go to Cart</span>
          </Link>
        )}

        {/* Intelligent Cart Controls toggling based on count state */}
        {!isInCart ? (
          <img 
            className="add" 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_white} 
            alt="Add to cart" 
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img 
              onClick={() => removeFromCart(id)} 
              src={assets.remove_icon_red} 
              alt="Decrease quantity" 
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && removeFromCart(id)}
            />
            <p aria-live="polite">{cartItemCount}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Increase quantity" 
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && addToCart(id)}
            />
          </div>
        )}
      </div>

      {/* Main Content Info */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h3>{name}</h3>
          {/* Note: keeping specific asset name from original codebase */}
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          <span className="currency-symbol">₹</span>{price}
        </p>
      </div>
    </article>
  );
};

export default FoodItem;
