import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PromoCode = () => {
  const { setDiscount } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "ABHI") {
      setDiscount(0.3); // 30% discount
      setMessage("✅ Promo applied! You got maximum discount.");
    } else {
      setDiscount(0);
      setMessage("❌ Invalid promo code.");
    }
  };

  return (
    <div className="cart-promocode">
      <div className="cart-promocode-input">
        <input
          type="text"
          placeholder="promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button onClick={handleApplyPromo}>Submit</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PromoCode;
