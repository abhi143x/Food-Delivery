import React, { useContext, useState } from 'react';
import './placeorder.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const cartAmount = getTotalCartAmount();
  const deliveryFee = cartAmount === 0 ? 0 : 2;
  const total = cartAmount + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (total === 0) {
      alert("Please add items to your cart before proceeding.");
      return;
    }
    setIsConfirmed(true);
  };

  return (
    <>
      <form className='place-order' onSubmit={handlePlaceOrder}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' required aria-label='First Name' />
            <input type="text" placeholder='Last Name' required aria-label='Last Name' />
          </div>
          <input type="email" placeholder='Email address' required aria-label='Email address' />
          <input type="text" placeholder='Street' required aria-label='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' required aria-label='City' />
            <input type="text" placeholder='State' required aria-label='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' required aria-label='Zip code' />
            <input type="text" placeholder='Country' required aria-label='Country' />
          </div>
          <input type='tel' placeholder='Phone' required aria-label='Phone number' />
        </div>

        <div className="place-order-right">
          {/* Mirroring premium Cart total card */}
          <div className="cart-total">
            <h2>Order Summary</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p><b>₹</b> {cartAmount.toFixed(2)}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p><b>₹</b> {deliveryFee.toFixed(2)}</p>
              </div>
              <div className="cart-total-details">
                <b>Total To Pay</b>
                <b><b>₹</b> {total.toFixed(2)}</b>
              </div>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>

      {/* Order Confirmation Modal */}
      {isConfirmed && (
        <div className="order-confirm-modal">
          <div className="order-confirm-box">
            <h3>🎉 Order Confirmed!</h3>
            <p>Your payment was successful and your delicious food is being prepared.</p>
            <button onClick={() => { setIsConfirmed(false); navigate('/'); }}>Back to Home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceOrder;