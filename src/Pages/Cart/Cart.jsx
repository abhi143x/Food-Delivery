import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, setDiscount } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ABHI') {
      setDiscount(0.3); // 30% discount
      setMessage('✨ Promo applied! You got maximum discount.');
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setMessage('Invalid promo code. Please try again.');
      setPromoApplied(false);
    }
  };

  // Calculations
  const originalSubtotal = getTotalCartAmount();
  const originalSubtotalFormatted = promoApplied ? (originalSubtotal / 0.7).toFixed(2) : originalSubtotal.toFixed(2);
  const discountAmount = promoApplied ? (originalSubtotalFormatted * 0.3).toFixed(2) : 0;
  const deliveryFee = originalSubtotal === 0 ? 0 : 2;
  const total = (originalSubtotal + deliveryFee).toFixed(2);

  return (
    <div className='cart'>
      <div className="cart-items">
        {/* Table Header */}
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p className="desktop-only">Quantity</p>
          <p className="desktop-only">Total</p>
          <p>Remove</p>
        </div>
        
        {/* Cart Items Mapping */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p><b>₹</b> {item.price}</p>
                  <p className="desktop-only">{cartItems[item._id]}</p>
                  <p className="desktop-only"><b>₹</b> {item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross' aria-label="Remove item" role="button" tabIndex={0}>&times;</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        {/* Order Summary Receipt Card */}
        <div className="cart-total">
          <h2>Order Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p><b>₹</b> {originalSubtotalFormatted}</p>
            </div>
            {promoApplied && (
              <div className="cart-total-details" style={{color: 'var(--color-primary)'}}>
                <p>Discount (30%)</p>
                <p><b>- ₹</b> {discountAmount}</p>
              </div>
            )}
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p><b>₹</b> {deliveryFee}</p>
            </div>
            
            <div className="cart-total-details">
              <b>Total</b>
              <b><b>₹</b> {total}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Card */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            {!promoApplied && <p style={{fontSize: '13px', color: 'var(--color-text-main)'}}>Hint: Use <b>ABHI</b> for max discount</p>}
            {message && <p className={`promo-message ${promoApplied ? 'success' : 'error'}`}>{message}</p>}
            
            <div className="cart-promocode-input">
              <input 
                type="text" 
                placeholder='Enter promo code' 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
              />
              <button onClick={handleApplyPromo}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
