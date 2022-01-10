import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../../hooks/CartContext.js";
import { Link } from "react-router-dom";
import CartRowPopup from "./CartRowPopup.js";
import "./CartPopup.css";

const CartPopup = ({ popupStateChange }) => {
  const cart = useCart();
  const cartPopupRef = useRef({});
  const [totalSumState, setTotalSumState] = useState(0);

  const renderPopup = (e) => {
    let isPopup =
      e.target == cartPopupRef.current ||
      cartPopupRef.current.contains(e.target);
    let isButton = e.target.classList.contains("headerPopupButton");
    let isPopupButton = e.target.classList.contains("closePopup");

    if (!isPopup || isButton || isPopupButton) {
      popupStateChange();
    }
  };

  useEffect(() => {
    document.addEventListener("click", renderPopup);
    setTotalSumState(
      cart.orderList.reduce((sum, current) => sum + current.total, 0)
    );
  }, []);

  return (
    <div className="CartPopup" ref={cartPopupRef}>
      {cart.orderList.map((item) => (
        <CartRowPopup
          key={item.id}
          item={item}
          setTotalSumState={setTotalSumState}
        />
      ))}
      <div className="CartPopup__totals">
        <span>total</span>
        <span>{`\$${totalSumState.toFixed(2)}`}</span>
      </div>
      <div className="CartPopup__buttons">
        <Link to="/cart" className="CartPopup__buttons_link closePopup">
          view cart
        </Link>
        <button className="CartPopup__buttons_button closePopup">
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
