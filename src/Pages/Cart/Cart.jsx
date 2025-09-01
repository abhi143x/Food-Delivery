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
      setMessage('✅ Promo applied! You got maximum discount.');
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setMessage('❌ Invalid promo code.');
      setPromoApplied(false);
    }
  };

  // Calculate original subtotal before discount
  const originalSubtotal = promoApplied ? (getTotalCartAmount() / 0.7).toFixed(2) : getTotalCartAmount().toFixed(2);
  const discountAmount = promoApplied ? (originalSubtotal * 0.3).toFixed(2) : 0;
  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 2;
  const total = (getTotalCartAmount() + deliveryFee).toFixed(2);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if(cartItems[item._id] > 0) {
            return(
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p><b>₹</b> {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p><b>₹</b> {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr/>
              </div>
            )
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>

            {/* Original Subtotal */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p><b>₹</b> {originalSubtotal}</p>
            </div>
            <hr />

            {/* Discount row */}
            <div className="cart-total-details">
              <p>Discount {promoApplied ? "(30%)" : ""}</p>
              <p><b>- ₹</b> {discountAmount}</p>
            </div>
            <hr />

            {/* Delivery Fee */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p><b>₹</b> {deliveryFee}</p>
            </div>
            <hr />

            {/* Total */}
            <div className="cart-total-details">
              <b>Total</b>
              <b><b>₹</b> {total}</b>
            </div>

          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          {!promoApplied && <p>Apply <b>"ABHI"</b> PromoCode for maximum discount</p>}
          {message && <p>{message}</p>}
          <div className="cart-promocode-input">
            <input 
              type="text" 
              placeholder='promo code' 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromo}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
