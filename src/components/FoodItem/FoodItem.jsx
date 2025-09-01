import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const isInCart = !!cartItems[id]; // true if item is in cart

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />

        {/* Show basket icon only if item is in cart */}
        {isInCart && (
          <Link to='/cart' className="basket-icon">
            <img src={assets.basket_icon} alt="basket" /><span>Go to Cart</span>
          </Link>
        )}

        {!isInCart ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add more" />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price"><b>₹</b> {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
